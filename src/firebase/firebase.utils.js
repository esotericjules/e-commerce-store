import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyB6yPqcWYBL5x0R1TgPgK0YTEspCHAL7F8",
  authDomain: "clothing-store-bdf48.firebaseapp.com",
  databaseURL: "https://clothing-store-bdf48.firebaseio.com",
  projectId: "clothing-store-bdf48",
  storageBucket: "clothing-store-bdf48.appspot.com",
  messagingSenderId: "726383187946",
  appId: "1:726383187946:web:f4dc8b9b71973bee00c493",
  measurementId: "G-E3XC5QCXSX"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
