import CartActionTypes from './cart.types.js';

const INITIAL_STATE = {
    hidden: true,
    cartItems: []  // initial state empty cart.
};

const cartReducer = (state = INITIAL_STATE,action) => {

    switch(action.type){
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return{
                ...state,
                hidden: !state.hidden
            };

        case CartActionTypes.ADD_ITEM: // adding item to the cart 
            return{
                ...state,
                cartItems: [...state.cartItems, action.payload] // we are spreading all our array values then any additional value
                // will be added in the end following spread values from existing array.
            }

        default:
            return state;
    }
}

export default cartReducer;