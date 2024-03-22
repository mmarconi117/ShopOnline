// paymentMethodReducer.jsx

import { SELECT_PAYMENT_METHOD } from '../actions';

// Define the initial state for the selected payment method
const initialState = null;

// Define the reducer function to handle actions related to the selected payment method
const paymentMethodReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_PAYMENT_METHOD:
      return action.payload; // Update the selected payment method based on the payload of the action
    default:
      return state;
  }
};

export default paymentMethodReducer;
