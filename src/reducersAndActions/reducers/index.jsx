
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
import returnsAndRefundsReducer from "./returnsAndRefunds";
import feedbackFormReducer from "./feedbackFormReducer";
import loginFormReducer from "./LoginFormReducer";
import buyersSignupFormReducer from "./BuyersSignupFormReducer";
import buyersLoginFormReducer from "./BuyersLoginFormReducer";
import shipReducer from "./shipReducer";
import checkoutEditReduce from "./checkoutEditReduce";
import shippingFormReducer from "./shippingFormReducer";
import shippingMethodReducer from "./shippingMethodReducer";
import paymentMethodReducer from "./paymentMethodReducer";




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
    returnsAndRefundsReducer,
    feedback: feedbackFormReducer,
    buyersSignupFormReducer,
    buyersLoginFormReducer,
    checkoutEditReduce,
    shippingFormReducer,
    shippingMethodReducer,
    paymentMethodReducer
});

export default rootReducer;
