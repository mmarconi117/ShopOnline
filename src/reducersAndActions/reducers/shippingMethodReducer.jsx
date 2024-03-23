// shippingMethodReducer.jsx

import { SELECT_SHIPPING_METHOD } from "../actions";

const initialState = {
  selectedMethod: "" // Initially set to the default shipping method
};

const shippingMethodReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_SHIPPING_METHOD:
      return {
        ...state,
        selectedMethod: action.payload // Update the selected shipping method
      };
    default:
      return state;
  }
};

export default shippingMethodReducer;
