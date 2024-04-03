import { SET_PAYMENT_DETAILS } from ".";


////Action creators////

 const setPaymentDetails = (payload) => ({
    type: SET_PAYMENT_DETAILS,
    payload,
  });
  
  export default setPaymentDetails