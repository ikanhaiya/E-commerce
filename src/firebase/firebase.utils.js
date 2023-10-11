import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyCEn6kKDeZWjAILvJubNVJTDzNpWwdcucE",
    authDomain: "crwn-db-32a5b.firebaseapp.com",
    projectId: "crwn-db-32a5b",
    storageBucket: "crwn-db-32a5b.appspot.com",
    messagingSenderId: "279171062608",
    appId: "1:279171062608:web:d2d7e823ecaafbac8a2a55",
    measurementId: "G-09LC51649H"
  };

  firebase.initializeApp(config);

  // configuring firebase utility that we get these are the ones 
  // that we need for authentication

  export const auth = firebase.auth();

  export const firestore = firebase.firestore();

  // setting up google authentication utility 
     
  // this gives access to GoogleAuthProvider class from authentication library
  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({ prompt: 'select_account'});

  export const signInwithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
  



