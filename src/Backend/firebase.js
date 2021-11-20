import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAzx1SESsR5z3nTCRdzGzuc0vjneZWtqbI",
    authDomain: "drop-complain.firebaseapp.com",
    databaseURL: "https://drop-complain-default-rtdb.firebaseio.com",
    projectId: "drop-complain",
    storageBucket: "drop-complain.appspot.com",
    messagingSenderId: "615785279471",
    appId: "1:615785279471:web:c01842d346995d4db1d01a",
    measurementId: "G-D5CDS4ECMS"
};

firebase.initializeApp(firebaseConfig);

// firebase.database().ref().set("Hello World");
const storage = firebase.storage();
const DB = firebase.database();

export { firebase, DB, storage };