import CartActionTypes from "./cart.types";

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
})


// function that gets item that we want to add to cartItems array.
export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
})
