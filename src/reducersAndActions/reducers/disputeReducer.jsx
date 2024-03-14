
import { UPDATE_STATUS_FILTER, TOGGLE_INSIGHTS, SEARCH_DISPUTES, TOGGLE_FILTER_DISPUTES } from "../actions";

const initialState = {
  disputes: [],
  showInsights: true,
  statusFilter: "All",
};

const disputeReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_DISPUTE:
            let update = [];
            state.disputes.forEach((item, index) => {
                if (index === action.payload.itemIndex) {
                    item.selected = action.payload.checked;
                }
                update.push(item);
            });
            return {
                ...state,
                disputes: state.disputesdisputes
            };
        case TOGGLE_INSIGHTS:
            return {
                ...state,
                showInsights: !state.showInsights
            };
        case UPDATE_STATUS_FILTER:
            return {
                ...state,
                statusFilter: action.payload
            };
        default:
            return state;
    }
};
export default disputeReducer;