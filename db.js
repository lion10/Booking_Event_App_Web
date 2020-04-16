
// db : it's the reference to firebase.firestore()

db.collection('events').onSnapshot(snapshot=>{

    const newsetEvent =snapshot.docChanges()[0].doc.data();
    const id =snapshot.docChanges()[0].doc.id;
    showLatestEvent(newsetEvent,id);

    // delete the latest event 
    snapshot.docChanges().shift();

    snapshot.docChanges().forEach(event => {
        showEvents(event.doc.data(),event.doc.id);
    });

});

const addNewEvent = ()=>{
    const event = {
        name:form.name.value,
        attendee:from.attendee.value,
        booked:0,
        description: form.description.value,
        status:parseInt(form.status.value,10)
    }
    db.collection('events').add(event)
    .then(() => {
        form.name.value ="",
        from.attendee.value="",
        form.description.value="",
        form.status.value=""
        alert("Your event has been successfully saved")

    }       
    ).catch(err => console.log(err));
}


// I use localStorage to prevent booking duplication
let bookedEvents = []; 

const bookEvent =(booked ,id) =>{
    const getBookedEvents = localStorage.getItem('booked-events');

        if(getBookedEvents){
            bookEvent = JSON.parse(localStorage.getItem('booked-events'));
            if(bookedEvents.includes(id)){
                alert('Seems like you have already booked this event'); 
            }  else{
                saveBooking(booked,id);
            }
        }else{
            saveBooking(booked,id);
        }
}

const saveBooking =(booked,id) => {
    bookedEvents.push(id);
    localStorage.setItem('booked-events', JSON.stringify(bookedEvents)); //JSON.stringify() method converts a JavaScript object or value to a JSON string

    const data ={booked: booked + 1};

    db.collection('events').doc(id).update(data)
    .then(() => alert('Event successfully booked'))
    .catch(err => console.log(err));

}