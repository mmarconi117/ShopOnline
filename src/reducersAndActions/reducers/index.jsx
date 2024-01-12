// rootReducer.js
import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import companyService from "./companyServiceReducer";
import businessDetailsReducer from "./businessDetailsReducer";
import ordersReducer from "./ordersReducer";
import productTestReducer from "./productTestReducer";
import { similarProductsTestReducer } from "./similarProductsTest";

export const rootReducer = combineReducers({
    cartReducer,
    companyService,
    businessDetailsReducer,
    ordersReducer,
    productTestReducer,
    similarProductsTestReducer,
});

export default rootReducer;
