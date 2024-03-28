import { SET_PAYMENT_DETAILS } from "../actions";

const initialState = {
    paymentDetails: [],
    isVerified: false,
  };
  
 const paymentDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_PAYMENT_DETAILS:
        return {
          ...state,
          isVerified: true,
          paymentDetails: action.payload,
        };
      default:
        return state;
    }
  };
 
  export default paymentDetailsReducer;