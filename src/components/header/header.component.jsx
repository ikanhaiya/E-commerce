import React from "react";

import { Link } from "react-router-dom";
import { ReactComponent as Logo } from '../../assests/084 crown.svg';
// it is special syntax in React for importing svg 

import { auth } from "../../firebase/firebase.utils";


import './header.styles.scss';

const Header = ({currentUser}) => (
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
        </div>

    </div>
)

export default Header;