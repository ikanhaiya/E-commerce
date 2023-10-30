import React from "react";
import { connect } from "react-redux";

import { ReactComponent as ShoppingIcons} from '../../assests/122 shopping-bag.svg';
import './cart-icon.styles.scss';

import { toggleCartHidden } from "../../redux/cart/cart.actions";

const CartIcon = ({toggleCartHidden}) => (
     <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcons className='shopping-icon'/>
        <span className='item-count'>0</span>
     </div>
);

const mapDispatchToProps = dispatch=> ({
   toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(
   null,
   mapDispatchToProps)
   (CartIcon);
