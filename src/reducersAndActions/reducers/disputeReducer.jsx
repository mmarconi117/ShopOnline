
import { UPDATE_STATUS_FILTER, TOGGLE_INSIGHTS } from "../actions";

const initialState = {
  disputes: [],
  showInsights: true,
  statusFilter: "All",
};

const disputeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_INSIGHTS:
      return {
        ...state,
        showInsights: !state.showInsights,
      };
      case UPDATE_STATUS_FILTER:
      return {
        ...state,
        statusFilter: action.payload,
      };
    default:
      return state;
  }
};

export default disputeReducer;
