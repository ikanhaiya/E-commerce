// utility function allows us to keep our files and orgnize fucntions that we may need in multiple files in one location

// we need to call this fucntion cart reducer.


 export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
        );
    
    if(existingCartItem){

        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id
            ? {...cartItem, quantity:cartItem.quantity + 1}
            : cartItem
            );
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1}];
    //quantity property gets attached the first time around since this if block wont run when its a new item  

 }