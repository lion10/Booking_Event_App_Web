# Booking-Event-App-Based-On-Web


## Description
The Event Booking App will have the following functionalities, which the app will build with Cloud Firestore techniqus:

1) The user can create an event and store it to Firestore.
2) The user can fetch all events in real-time.
3) The user can book an event.
4) The user can't book an event more than once.

### What do I plan to do in the future ?

1) Login page and the user can login by social media too e.g. facebook,twitter
2) Signup page and the user can signup by social media too e.g. facebook,twitter
4) Forget your password and reset it
3) Notifcation system
4) About me section



### Technologies

- html 5
- css 3
- JavaScript
- Cloud Firestore 
- Firebase

### What is the most problems and challenges faced me during the development of this application?

a. git side
   - problem_1) updates were rejected because the remote contains work that you do not have locally?
        -   sol_1)
               
                The best option for me was,it works and simple

                  git pull --rebase

                  then

                  git push
                  

                  

b. frontend side

   - problem_1) How do I disable the resizable property of a textarea?
   
        -   sol_1)
               
                textarea {
                      resize: none; /* there lists possible values for resizing restrictions: none, vertically, both, horizontal, vertical, and inherit */
                }
             


c. backend side
-    problem_1) How I hide api key which is used to authenticate a user, developer, or calling program to an AP? 
       -   sol_1)
                   
                    using dotenv when i used node.js server as a backend 
                    and how i use .gitignore file in my project


-    problem_2) Uncaught (in promise) FirebaseError: Missing or insufficient permissions.

        -   sol_2)
               
                I look at my Firestore rules, they should match:

                service cloud.firestore {
                  match /databases/{database}/documents {
                    match /{document=**} {
                      allow read;
                      allow write: if false;
                    }
                  }
                }
        but we have problem here just we can read from firstore so to be able to write on it we should allow to write 
        it will become :
                      
                I look at my Firestore rules, they should match:

                service cloud.firestore {
                  match /databases/{database}/documents {
                    match /{document=**} {
                      allow read;
                      allow write;
                    }
                  }
                }
## References

1) https://www.npmjs.com/package/dotenv
2) https://www.youtube.com/watch?v=17UVejOw3zA
3) https://firebase.google.com/docs/web/setup?authuser=0
4) https://firebase.google.com/docs/database/web/start
5) https://www.freecodecamp.org/news/how-to-build-an-event-booking-app-using-html-css-javascript-and-firebase/#markup
6) https://www.youtube.com/watch?v=kmTECF0JZyQ&list=PL4cUxeGkcC9itfjle0ji1xOZ2cjRGY_WB&index=3


## Author Info

- LinkedIn - [@Omar Suliman](https://www.linkedin.com/in/omar-abusabha)

