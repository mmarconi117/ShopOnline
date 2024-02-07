import { TOGGLE_INSIGHTS, UPDATE_STATUS_FILTER, TOGGLE_DROP } from "../actions";

const initialState = {
  disputes: [],
  showInsights: true,
  statusFilter: "All",
  isDropdownOpen: false,
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
    case TOGGLE_DROP:
      return {
        ...state,
        isDropdownOpen: action.payload,
      };
    default:
      return state;
  }
};

export default disputeReducer;
