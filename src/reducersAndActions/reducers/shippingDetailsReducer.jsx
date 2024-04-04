import { SET_SHIPPING_DETAILS } from "../actions";

const initialState = {
    shippingDetails: [],
    isVerified: false,
  };
  
 const shippingDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_SHIPPING_DETAILS:
        return {
          ...state,
          isVerified: true,
          shippingDetails: action.payload,
        };
      default:
        return state;
    }
  };
 
  export default shippingDetailsReducer;