import React from "react";

import { Link } from "react-router-dom";
import { ReactComponent as Logo } from '../../assests/084 crown.svg';
// it is special syntax in React for importing svg 

import './header.styles.scss';

const Header = () => (
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

        </div>

    </div>
)

export default Header;