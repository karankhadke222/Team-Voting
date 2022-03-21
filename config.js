import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDdTGfIcj2b3SFHbaJcGBoGrbNL3PEBrto",
    authDomain: "voting-app-4bcbe.firebaseapp.com",
    databaseURL: "https://voting-app-4bcbe-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "voting-app-4bcbe",
    storageBucket: "voting-app-4bcbe.appspot.com",
    messagingSenderId: "82442156364",
    appId: "1:82442156364:web:eaf4e675cc0daa8ed5b7e9"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();