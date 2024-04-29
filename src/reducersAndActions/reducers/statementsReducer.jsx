import { SET_STATEMENTS } from "../actions";

const initialState = {};
  
 const statementsReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_STATEMENTS:
        return action.payload
      default:
        return state;
    }
  };
 
  export default statementsReducer;