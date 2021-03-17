
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBsMDJleFoVLAh3XiPTjEJK8tfG3Wfsvy8",
    authDomain: "notificationapp-5d1b0.firebaseapp.com",
    projectId: "notificationapp-5d1b0",
    storageBucket: "notificationapp-5d1b0.appspot.com",
    messagingSenderId: "223536787341",
    appId: "1:223536787341:web:f9e2d724c51752f9c2d7c4"
  };

  firebase.initializeApp(firebaseConfig);

  const messaging =  firebase.messaging(); 
  
 export function initNotification (){

    Notification.requestPermission().then((permission) =>{
        
        console.log(permission)
if(permission === "granted"){


        messaging.getToken().then((currentToken) => {
            if (currentToken) {
              
                console.log("TOKEN");
                console.log(currentToken );
            } else {
             
              console.log('No registration token available. Request permission to generate one.');
              
            }
          }).catch((err) => {
            console.log('An error occurred while retrieving token. ', err);
            
          });
        }
    })

 }