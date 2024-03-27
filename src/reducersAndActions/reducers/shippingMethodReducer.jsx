// shippingMethodReducer.jsx
import { SELECT_SHIPPING_METHOD } from "../actions";

const initialState = {
  selectedMethod: "", // Initially set to the default shipping method
  shippingCost: 0 // Initially set shipping cost to 0
};

const shippingMethodReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_SHIPPING_METHOD:
      return {
        ...state,
        selectedMethod: action.payload.method,
        shippingCost: action.payload.shippingCost
      };
    default:
      return state;
  }
};

export default shippingMethodReducer;
