// shippingMethodReducer.jsx

import { SELECT_SHIPPING_METHOD } from '../actions';

const initialState = {
  selectedMethod: '', // Initially set to the default shipping method
  shippingCost: 0, // Initially set shipping cost to 0
};

const shippingMethodReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_SHIPPING_METHOD:
      // Update shipping cost based on the selected method
      let shippingCost = 0;
      switch (action.payload) {
        case 'Standard':
          shippingCost = 0;
          break;
        case 'Express':
          shippingCost = 20;
          break;
        case 'Overnight':
          shippingCost = 30;
          break;
        default:
          shippingCost = 0;
      }
      return {
        ...state,
        selectedMethod: action.payload,
        shippingCost: shippingCost,
      };
    default:
      return state;
  }
};

export default shippingMethodReducer;
