import React from "react";

import { Link } from "react-router-dom";
import { ReactComponent as Logo } from '../../assests/084 crown.svg';
// it is special syntax in React for importing svg 

import { auth } from "../../firebase/firebase.utils";

import { connect } from "react-redux";  // it lets us modify our component to have access to 

import CartIcon from "../cart-icon/cart-icon.component";

import CartDropDown from "../cart-dropdown/cart-dropdown.component";

import './header.styles.scss';
const Header = ({currentUser,hidden}) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link className="option" to="/shop">
                SHOP
            </Link>
            <Link className="option" to="/shop">
                CONTACT
            </Link>
            {    
              // took the current user info if its object means user is signed in and need ot sign out
              // if not signed in the currentUser==null and this will be treated as false resulting <div>sign in </div>
              // will render.
                currentUser ?
                (<div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>)
                :
                (<Link className="option" to='/signin'>
                    SIGN IN
                </Link>)
            }

            <CartIcon />
        </div>
        {
            hidden ? null :
        <CartDropDown />
        }
    </div>
);
// this naming can be anything but mapStateToProps is standard with redux codebases

const mapStateToProps = ({user: { currentUser }, cart: {hidden}}) => ({
     
    currentUser,
    hidden
  
}); // this function will allow us to access the state(begin our root reducer specificaly)

export default connect(mapStateToProps)(Header);