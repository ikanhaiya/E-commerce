import React from "react";

import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

import CustomButton from "../custom-button/custom-button.component";

import './collection-item.styles.scss';

const CollctionItem = ({ id, name, price, imageUrl, addItem }) => (

    <div className="collection-item">

        <div className="image"
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />
        <div className="collection-footer">
            <span className="name">{name}</span>
            <span className="price">{price}</span>
        </div>
        <CustomButton inverted > Add to cart</CustomButton>
    </div>

);

// for dispatching newly added item
const mapDispatchToProps =dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null,  mapDispatchToProps)(CollctionItem);