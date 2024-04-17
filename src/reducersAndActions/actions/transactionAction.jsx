import {SET_TRANSACTION} from ".";



const setTransaction = (payload) => ({
    type: SET_TRANSACTION,
    payload,
  });
  
  export default setTransaction