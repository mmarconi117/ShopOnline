// shippingMethodReducer.jsx

import { SELECT_SHIPPING_METHOD } from "../actions";




const initialState = {
    selectedMethod: null
  };

  const shippingMethodReducer = (state = initialState, action) => {
    switch (action.type) {
      case SELECT_SHIPPING_METHOD:
        return {
          ...state,
          selectedMethod: action.payload // Update only the selectedMethod property
        };
      default:
        return state;
    }
  };


  export default shippingMethodReducer;
