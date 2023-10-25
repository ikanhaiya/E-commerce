// root reducer is  actual base reducer object that represents all of the state of our application
// actual code combines all of other states together.

// full state is just on big json object keys represent indivudual slices of state i.e actual reducer


import { combineReducers } from "redux";  // for combineing all reducers together

import userReducer from "./user/user.reducer";

export default combineReducers({
    
    user: userReducer
});

