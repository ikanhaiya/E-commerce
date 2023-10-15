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

  export const createUserProfileDocument = async (userAuth, additonalData) => {
    
    if(!userAuth) return;
     
    // firestore always gives back object it is queryrefrence or querySnapshot 
    
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    // console.log(snapShot)

    if(!snapShot.exists){
      // creating data at location in firestore by userAuth 
      // inorder for us to CRUD we have to use document refrence object not snapshot(it represents only data)
      
      // data wanted to store: displayName ,email from userAuth

      const {displayName, email} = userAuth;
      
      const createdAt = new Date(); // I want to store when data was created
      // Date() object gives current date current time when it was created
      
      try{

        await userRef.set({
          displayName, 
          email,
          createdAt,
          ...additonalData
        })
      }

      catch(error){
         console.log("error creating user", error.message);
      }
    }

    return userRef;

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
  



