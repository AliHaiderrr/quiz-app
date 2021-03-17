importScripts('https://www.gstatic.com/firebasejs/8.2.10/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.10/firebase-messaging.js');

const firebaseConfig = {
    apiKey: "AIzaSyBsMDJleFoVLAh3XiPTjEJK8tfG3Wfsvy8",
    authDomain: "notificationapp-5d1b0.firebaseapp.com",
    projectId: "notificationapp-5d1b0",
    storageBucket: "notificationapp-5d1b0.appspot.com",
    messagingSenderId: "223536787341",
    appId: "1:223536787341:web:f9e2d724c51752f9c2d7c4"
  };

  firebase.initializeApp(firebaseConfig);

  firebase.messaging();