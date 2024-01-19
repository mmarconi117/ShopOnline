// companyServiceActions.js

const initialState = {
  display: "DISPLAY_STATEMENT",
};

const paymentDisplay = (state = initialState, action) => {
  switch (action.type) {
    case "DISPLAY_STATEMENT":
      return {
        display: "STATEMENT",
      };
    case "DISPLAY_TRANSACTION":
      return {
        display: "TRANSACTION",
      };
    default:
      return state;
  }
};

export default paymentDisplay;
