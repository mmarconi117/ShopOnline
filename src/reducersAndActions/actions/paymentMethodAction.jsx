import { SELECT_PAYMENT_METHOD } from ".";

export const selectPaymentMethod = (method) => {
  return {
    type: SELECT_PAYMENT_METHOD,
    payload: method
  };
};
