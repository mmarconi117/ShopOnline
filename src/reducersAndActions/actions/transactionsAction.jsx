import {SET_TRANSACTIONS} from ".";



const setTransactions = (payload) => ({
    type: SET_TRANSACTIONS,
    payload,
  });
  
  export default setTransactions