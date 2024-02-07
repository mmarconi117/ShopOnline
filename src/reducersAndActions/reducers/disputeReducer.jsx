// disputeReducer.js
import { ADD_DISPUTE, TOGGLE_INSIGHTS } from "../actions";

const initialState = {
  disputes: [],
  showInsights: true,
};

const disputeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_INSIGHTS:
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
