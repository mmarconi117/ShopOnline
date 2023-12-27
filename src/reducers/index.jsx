// import { combineReducers } from 'redux';

// const rootReducer = combineReducers({
//   //add reducers as needed here
// });

// export default rootReducer;

import { combineReducers } from "@reduxjs/toolkit";
import productReducer from "./product";

const rootReducer = combineReducers({
    product: productReducer,
});

export default rootReducer;
