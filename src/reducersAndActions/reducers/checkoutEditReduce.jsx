// checkoutEditReduce.jsx

import { EDIT_SHIPPING_ADDRESS } from '../actions/index';

const initialState = {
  shippingAddress: {
    name: "Mr. Tony Stark",
    address: "Top of New York",
    zip: "84052",
    phone: "+19048588048"
  },
  isEditing: false // Initialize isEditing to false
};

const checkoutEditReduce = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_SHIPPING_ADDRESS:
      return {
        ...state,
        isEditing: !state.isEditing // Toggle isEditing when EDIT_SHIPPING_ADDRESS is dispatched
      };
    default:
      return state;
  }
};

export default checkoutEditReduce;
