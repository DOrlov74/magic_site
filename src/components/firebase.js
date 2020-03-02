import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseApp= firebase.initializeApp({
    apiKey: "AIzaSyBcqqlo4fvRAa1q2eTlk30nbA2RufIAFIQ",
    authDomain: "magia-5bd20.firebaseapp.com",
    databaseURL: "https://magia-5bd20.firebaseio.com",
    projectId: "magia-5bd20",
    storageBucket: "magia-5bd20.appspot.com",
    messagingSenderId: "395588592877",
    appId: "1:395588592877:web:ae0ce650c269cba46c18e4"
});

//make auth and firestore references
const auth=firebaseApp.auth();
const db=firebaseApp.firestore();

export {auth, db};