import React from 'react';
import './App.css';

import { Route, Routes } from 'react-router-dom';


import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils'; // using this we want to store state of user in our APP

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null


  componentDidMount() {
    // onAuthStateChanged is function provided by auth service of firbase.
    // it take function as parameter telling what the state of the Auth on our firebase project is

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {  // subscription open

      if(userAuth){
         
        const userRef = await createUserProfileDocument(userAuth);

        // we are going to check if our database is updated at userRef
        
        userRef.onSnapshot(snapShot => {
           // setState is asynchronous function
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data() // get back object representing the values
            }

          });
        });
        
      }

      this.setState({currentUser: userAuth}); // setting currentUser to null if userAuth is NULL
    });
  }

  componentWillUnmount() {  // called when component is about to be removed.


    this.unsubscribeFromAuth();
    // this method is used to clean subscription from firebase authentication state 
    //if not done so can result in memory leaks , cleaning up subscription when it is no longer needed
    // helps the component to have updated info about current users authentication state

  }



  render() {
    return (

      <div>
        {/* by this we are letting header component know wheater user is signed in or not 
       info of currentUser is passed as props  */}
        <Header currentUser={this.state.currentUser} />
        {/* header will always be on top because react-dom will manipulate routes component children */}
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/shop' element={<ShopPage />} />
          <Route path='/signin' element={<SignInAndSignUpPage />} />
        </Routes>
      </div>
    );
  }
}

export default App;
