import { SET_TRANSACTION } from "../actions";

const initialState ={};

 const transactionReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_TRANSACTION:
        return  action.payload
      default:
        return state;
    }
  };
 
  export default transactionReducer;