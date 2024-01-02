import { combineReducers } from "redux";
import { setProductDetailsReducer } from "./productReducer";
import { setCartReducer } from "./cartReducer";

export const rootReducer = combineReducers({
    setProductDetailsReducer,
    setCartReducer,
});
export default rootReducer;
