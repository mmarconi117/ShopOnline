// rootReducer.js
import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import companyService from "./companyServiceReducer";

const rootReducer = combineReducers({
  cartReducer,
  companyService
});

export default rootReducer;
