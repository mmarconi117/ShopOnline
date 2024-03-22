// shippingFormReducer.jsx

import { UPDATE_SHIPPING_FORM } from '../actions';

// Define the initial state for the shipping address form
const initialState = {
  firstName: '',
  lastName: '',
  address: '',
  city: '',
  state: '',
  zipCode: '',
  contactInfo: '',
  email: '',
};

// Define the reducer function to handle actions related to the shipping address form
const shippingFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SHIPPING_FORM:
      // Update the form data based on the payload of the action
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default shippingFormReducer;
