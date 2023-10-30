import React from 'react';
import './App.css';

import { Route, Routes, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils'; // using this we want to store state of user in our APP

import { setCurrentUser } from './redux/user/user.actions';
import userReducer  from './redux/user/user.reducer';
class App extends React.Component {

  // constructor() {
  //   super();
  // we dont need it now .
  //   this.state = { 
  //     currentUser: null
  //   }


  // }

  unsubscribeFromAuth = null


  componentDidMount() {

    const { setCurrentUser } = this.props;

    // onAuthStateChanged is function provided by auth service of firbase.
    // it take function as parameter telling what the state of the Auth on our firebase project is

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {  // subscription open

      if (userAuth) {

        const userRef = await createUserProfileDocument(userAuth);

        // we are going to check if our database is updated at userRef

        userRef.onSnapshot(snapShot => {
          // setState is asynchronous function
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data() // get back object representing the values   
          });
          // console.log(this.state);
        });

      }

      setCurrentUser(userAuth); // setting currentUser to null if userAuth is NULL
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
        <Header />
        {/* header will always be on top because react-dom will manipulate routes component children */}
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/shop' element={<ShopPage />} />
          <Route path='/signin' element={this.props.currentUser ? (<Navigate to='/'/>) : <SignInAndSignUpPage/>}/>
        
        </Routes>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
   currentUser: user.currentUser
});
  


const mapDispatchToProps = dispatch => ({

  setCurrentUser: user => dispatch(setCurrentUser(user))  // dispatch tells redux that wahatever object has been passed in 
  //it will be action object that `redux will pass to every reducer
  // user will be used as payload ,setCurrentUser returns object 
});

export default connect(
  mapStateToProps,
  mapDispatchToProps)
  (App);
