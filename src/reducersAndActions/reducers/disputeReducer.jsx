import { ADD_DISPUTE, TOGGLE_INSIGHTS } from "../actions";


const initialState = {
  disputes: [],
  showInsights: false,
};

const disputeReducer = (state = initialState, action) => {
    console.log(action.type); // Log the action type
    switch (action.type) {
      case TOGGLE_INSIGHTS:
        console.log("Toggling insights"); // Log when insights are toggled
        return {
          ...state,
          showInsights: !state.showInsights,
        };
        case ADD_DISPUTE:
      return {
        ...state,
        disputes: [...state.disputes, action.payload],
      };
      default:
        return state;
    }
  };

  export default disputeReducer;
