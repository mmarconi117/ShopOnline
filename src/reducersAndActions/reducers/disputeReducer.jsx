
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

const filterBy = (filterType, state, sortBy) => {
    let update;
    switch (filterType) {
        case "Order":
            update = state.disputes.toSorted((a, b) =>
                a.orderNumber > b.orderNumber ? 1 : b.orderNumber > a.orderNumber ? -1 : 0
            );
            // break;
            return update;
        case "Purchase":
            update = state.disputes.toSorted((a, b) =>
                a.purchaseOrder > b.purchaseOrder ? 1 : b.purchaseOrder > a.purchaseOrder ? -1 : 0
            );
            // break;
            return update;
        case "RMA":
            update = state.disputes.toSorted((a, b) =>
                a.rma > b.rma ? 1 : b.rma > a.rma ? -1 : 0
            );
            // break;
            return update;
        case "CustomerOrder":
            update = state.disputes.toSorted((a, b) =>
                a.customerOrder > b.customerOrder ? 1 : b.customerOrder > a.customerOrder ? -1 : 0
            );
            // break;
            return update;
        case "Price":
            if (sortBy === "lowest") {
                update = state.disputes.toSorted((a, b) =>
                    a.price > b.price ? 1 : b.price > a.price ? -1 : 0
                );
            } else {
                update = state.disputes.toSorted((a, b) =>
                    a.price < b.price ? 1 : b.price < a.price ? -1 : 0
                );
            }
            // break;
            return update;
        case "Status":
            update = state.disputes.toSorted((a, b) =>
                a.status > b.status ? 1 : b.status > a.status ? -1 : 0
            );
            return update;
        default:
            return state.disputes;
        // break;
    }
};
