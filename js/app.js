const eventsContainer =  document.querySelector('.events-container');
const nav =document.querySelector('.navbar');
const welcomtEvent =document.querySelector('.welcome-event');
const form = document.querySelector('.form');

const showEvent =  (event,id) =>{
    const {name, attendee, status, description, booked} = event;
    const eventStatus = status ===0 ? 'free':'paid';
    const output = `
        <div class="card">
            <div class="card--details">
                <div>
                    <h1>${name}</h1>
                    <span>${attendee - booked}</span>
                </div>
                <span class= "card--details-ribbon ribbon-${eventStatus}">
                    ${eventStatus}
                </span>
                <p>${description}</p>
                <button onclick="bookEvent(${booked} ,'${id}')" class="btn btn-tertiary">Book</button>
            </div>
        </div>`;
        
        eventsContainer.innerHTML += output;

        const cardDetails = document.querySelector('.card--details');
        const card = document.querySelector('.card');
        let cross = document.createElement('div');
        cross.className = 'topLeftPlace';
        card.setAttribute('id-data',id); 
        cross.textContent ='X';
        cardDetails.appendChild(cross);
        card.appendChild(cross);
        eventsContainer.appendChild(card);
        cross.addEventListener('click',(e)=>{
            e.stopPropagation();
            let tempId =e.target.parentElement.getAttribute('id-data');
            db.collection('events').doc(tempId).delete();
        });

}


// function deleteEvent(element){
   
//     const cardDetails = document.querySelector('.card--details')
//     let cross = document.createElement('div');
//     cross.className = 'topLeftPlace';
//     cardDetails.setAttribute('id-data',element); 
//     cross.textContent ='X';
//     cardDetails.appendChild(cross);

//     cross.addEventListener('click',(e)=>{
//         e.stopPropagation();
//         let tempId =e.target.parentElement.getAttribute('id-data');
//         db.collection('events').doc(tempId).delete();
//     })

// }



const showLatestEvent =  (latestEvent,id) =>{
    const {name, attendee, status, description, booked} = latestEvent;
    const eventStatus = status === 0 ? 'free':'paid';
    const output = `
        <h1>${name}</h1>
        <p>${description.length >= 100 ? `${description.substring(0, 100)}...` : description}</p>
        <div>
            <span>Attendees: ${attendee - booked}</span>
            <span>Status: ${status === 0 ? 'free': 'paid'}</span>
        </div>
        <button onclick="bookEvent(${booked} ,'${id}')" class="btn btn-tertiary">Book</button>
        
        `;
        
    welcomtEvent.innerHTML += output;
}


form.addEventListener('submit',e =>{
    e.preventDefault(); // to prevent refreach the page
    addNewEvent();
});

window.onscroll = ()=>{
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        nav.style.background = 'var(--tertiray-color)';
      //  nav.style.background = rgba(255,255,255,0.9);
        nav.style.boxShadow = '0 10px 42px rgba(25,17,34,.1)';
      } else {
        nav.style.background = 'none';
        nav.style.boxShadow = 'none';
      }
}