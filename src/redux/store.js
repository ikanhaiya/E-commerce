import { legacy_createStore as createStore, applyMiddleware } from "redux";

// whenever action gets fired or dispatched we can catch them and then display them

// middleware is fucntion between our actions firing and our root reducer 

import logger from "redux-logger"; // catches the action console logs out and then moves { good for debuhging}
import rootReducer from "./root-reducer";

const middlewares = [logger];

// making a store                        
const store = createStore(rootReducer, applyMiddleware(...middlewares));  // values in array are function provided by logger.
// applymiddleware(...middlewares) => it will all the values inside array as indivudual argument in applymiddleware function.


export default store;
