import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5D0kvrffGwCq2faxVCBpZVn4J057qe0Y",
  authDomain: "clone-2551e.firebaseapp.com",
  projectId: "clone-2551e",
  storageBucket: "clone-2551e.appspot.com",
  messagingSenderId: "455678556427",
  appId: "1:455678556427:web:9447a3da6d2d2253a1ca0e",
  measurementId: "G-J6G3RFZD98"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
