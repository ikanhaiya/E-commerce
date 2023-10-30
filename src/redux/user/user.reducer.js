// reducer takes 2 inputs state(current state) and action(object defines type) which will change current state

// it is same as we used to initialize state in our class component

import { UserActionTypes } from "./user.types"; 

const INITIAL_STATE = {
    currentUser: null
};

// ES6 feature which assigns state = INITIAL_STATE if state is not defined
const userReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            };

        default:
            return state;
    }
};

export default userReducer;