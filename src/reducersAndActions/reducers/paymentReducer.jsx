import { DISPLAY_STATEMENT, DISPLAY_TRANSACTION } from "../actions";

const initialState = {
  displayStatement: true,
  displayTransaction: false,
};

const paymentReducer = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_STATEMENT:
      return {
        ...state,
        displayStatement: true,
        displayTransaction: false,
      };
    case DISPLAY_TRANSACTION:
      return {
        ...state,
        displayStatement: false,
        displayTransaction: true,
      };
    default:
      return state;
  }
};

export default paymentReducer;
