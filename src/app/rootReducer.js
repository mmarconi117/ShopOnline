import { combineReducers } from '@reduxjs/toolkit';
import orderSlice from "../features/orderSlice";
import businessDetailsSlice from "../features/businessDetailsSlice";
import productDataSlice from "../features/productDataSlice";

const rootReducer = combineReducers({
  orders: orderSlice,
  businessDetails: businessDetailsSlice,
  productData: productDataSlice,
});

export default rootReducer;