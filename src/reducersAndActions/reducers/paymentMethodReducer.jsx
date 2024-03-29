// paymentMethodReducer.jsx
import { EDIT_PAYMENT_METHOD } from '../actions';

const initialState = {
  selectedPaymentMethod: null,
  isPaymentEditing: false,
};

const paymentMethodReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_PAYMENT_METHOD:
      return {
        ...state,
        isPaymentEditing: !state.isPaymentEditing,
      };
    default:
      return state;
  }
};

export default paymentMethodReducer;
