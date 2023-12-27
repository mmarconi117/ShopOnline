/* 
This file not to be touched unless you have explicit permission.
*/


import { createStore } from "redux";
import rootReducer from "./reducersAndActions/reducers"; // Make sure this path is correct

const store = createStore(rootReducer);

export default store;
