// rootReducer.js
import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import companyService from "./companyServiceReducer";
import businessDetailsReducer from "./businessDetailsReducer";
import ordersReducer from "./ordersReducer";
import productTestReducer from "./productTestReducer";
import { similarProductsTestReducer } from "./similarProductsTest";
import productCatalogueReducer from "./productCatalogue";
import reviewsReducer from "./reduceReview"; // Add this line

export const rootReducer = combineReducers({
  cartReducer,
  companyService,
  businessDetailsReducer,
  ordersReducer,
  productTestReducer,
  similarProductsTestReducer,
  productCatalogueReducer,
  reviews: reviewsReducer,
});

export default rootReducer;
