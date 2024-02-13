
import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import companyService from "./companyServiceReducer";
import businessDetailsReducer from "./businessDetailsReducer";
import ordersReducer from "./ordersReducer";
import productTestReducer from "./productTestReducer";
import { similarProductsTestReducer } from "./similarProductsTest";
import productCatalogueReducer from "./productCatalogue";
import paymentReducer from "./paymentReducer";
import feedbackReducer from "./feedbackReducer";
import signupFormReducer from "./SignupFormReducer";
import reviewsReducer  from "./reduceReview";
import disputeReducer from "./disputeReducer";
import feedbackFormReducer from "./feedbackFormReducer";
import shipReducer from "../reducers/shipReducer";


import loginFormReducer from "./LoginFormReducer";

export const rootReducer = combineReducers({
    cartReducer,
    shipReducer,
    companyService,
    businessDetailsReducer,
    ordersReducer,
    productTestReducer,
    similarProductsTestReducer,
    productCatalogueReducer,
    paymentReducer,
    feedbackReducer,
    signupFormReducer,
    reviews: reviewsReducer,
    loginFormReducer,
    disputeReducer,
    feedback: feedbackFormReducer
});

export default rootReducer;
