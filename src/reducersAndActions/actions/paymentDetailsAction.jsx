import { SET_PAYMENT_DETAILS } from ".";

 const setPaymentDetails = (payload) => ({
    type: SET_PAYMENT_DETAILS,
    payload,
  });
  
  export default setPaymentDetails