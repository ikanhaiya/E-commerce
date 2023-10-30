import React from "react";
import { ReactComponent as ShoppingIcons} from '../../assests/122 shopping-bag.svg';
import './cart-icon.styles.scss';


const CartIcon = () => (
     <div className='cart-icon'>
        <ShoppingIcons className='shopping-icon'/>
        <span className='item-count'>0</span>
     </div>
);

export default CartIcon;