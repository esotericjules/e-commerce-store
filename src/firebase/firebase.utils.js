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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  
  const userRef =  firestore.doc(`users/${userAuth.uid}`);
  
  const snapShot = await userRef.get();
  
  if (!snapShot.exists){
    const {displayName, email} = userAuth;
    const createdAt = new Date();
    
    try {
     await userRef.set({
       displayName,
       email,
       createdAt,
       ...additionalData
     })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  console.log('userRef', userRef)
  return userRef;
 
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);


export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  // console.log(collectionRef)
  
  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    // console.log(newDocRef);
    batch.set(newDocRef, obj);
  })
  
   return await batch.commit()
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();
    
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  });
  
 return  transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  },{})
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth)
    }, reject);
  })
}

export default firebase;
