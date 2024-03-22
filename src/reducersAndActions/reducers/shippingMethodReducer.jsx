// shippingMethodReducer.jsx

import { SELECT_SHIPPING_METHOD } from "../actions";




const initialState = {
    selectedMethod: null
  };

  const shippingMethodReducer = (state = initialState, action) => {
    switch (action.type) {
      case SELECT_SHIPPING_METHOD:
        return action.payload; // Update the selected payment method based on the payload of the action
    default:
      return state;
    }
  };

  export default shippingMethodReducer;
