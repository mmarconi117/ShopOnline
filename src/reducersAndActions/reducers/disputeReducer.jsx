
import {
    UPDATE_STATUS_FILTER,
    TOGGLE_INSIGHTS,
    SEARCH_DISPUTES,
    TOGGLE_FILTER_DISPUTES
} from "../actions";

const initialState = {
    disputes: [
        {
            id: 1,
            orderNumber: "123",
            purchaseOrder: 96,
            rma: 12,
            customerOrder: 125,
            status: "In Review",
            price: 25
        },
        {
            id: 2,
            orderNumber: "14",
            purchaseOrder: 85,
            rma: 122,
            customerOrder: 25,
            status: "In Review",
            price: 25
        },
        {
            id: 3,
            orderNumber: "10",
            purchaseOrder: 12,
            rma: 35,
            customerOrder: 45,
            status: "Initiated",
            price: 25
        },
        {
            id: 4,
            orderNumber: "12",
            purchaseOrder: 25,
            rma: 20,
            customerOrder: 32,
            status: "Pneding",
            price: 10
        },
        {
            id: 5,
            orderNumber: "134",
            purchaseOrder: 25,
            rma: 30,
            customerOrder: 20,
            status: "In Review",
            price: 32
        },
        {
            id: 6,
            orderNumber: "25",
            purchaseOrder: 96,
            rma: 23,
            customerOrder: 24,
            status: "Pending",
            price: 38
        },
        {
            id: 7,
            orderNumber: "85",
            purchaseOrder: 35,
            rma: 74,
            customerOrder: 14,
            status: "Pending",
            price: 2500
        },
        {
            id: 8,
            orderNumber: "3214",
            purchaseOrder: 12345,
            rma: 12345,
            customerOrder: 7418,
            status: "In Review",
            price: 1356
        },
        {
            id: 9,
            orderNumber: "2589",
            purchaseOrder: 8523,
            rma: 1234,
            customerOrder: 3246,
            status: "Pending",
            price: 254
        },
        {
            id: 10,
            orderNumber: "1234",
            purchaseOrder: 2589,
            rma: 3256,
            customerOrder: 1234,
            status: "In Review",
            price: 3589
        },
        {
            id: 11,
            orderNumber: "3456",
            purchaseOrder: 3589,
            rma: 1234,
            customerOrder: 3258,
            status: "Initiated",
            price: 2589
        },
        {
            id: 12,
            orderNumber: "1234",
            purchaseOrder: 8529,
            rma: 35698,
            customerOrder: 7895,
            status: "In Review",
            price: 3698
        },
        {
            id: 13,
            orderNumber: "3456",
            purchaseOrder: 3589,
            rma: 1234,
            customerOrder: 3258,
            status: "Initiated",
            price: 2589
        },
        {
            id: 14,
            orderNumber: "1234",
            purchaseOrder: 8529,
            rma: 35698,
            customerOrder: 7895,
            status: "In Review",
            price: 3698
        }
    ],
    filtered: [],
    showInsights: true,
    statusFilter: "All"
};

const disputeReducer = (state = initialState, action) => {
    switch (action.type) {
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
        case SEARCH_DISPUTES:
            const filtered = state.disputes.filter(
                (item) =>
                    parseFloat(item.orderNumber) >= action.payload ||
                    item.purchaseOrder >= action.payload ||
                    item.rma >= action.payload ||
                    item.customerOrder >= action.payload
            );
            return {
                ...state,
                filtered: filtered
            };
        case TOGGLE_FILTER_DISPUTES:
            const { filterType, sortBy } = action.payload;
            return {
                ...state,
                filtered: filterBy(filterType, state, sortBy)
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

            return update;
        case "Purchase":
            update = state.disputes.toSorted((a, b) =>
                a.purchaseOrder > b.purchaseOrder ? 1 : b.purchaseOrder > a.purchaseOrder ? -1 : 0
            );

            return update;
        case "RMA":
            update = state.disputes.toSorted((a, b) =>
                a.rma > b.rma ? 1 : b.rma > a.rma ? -1 : 0
            );

            return update;
        case "CustomerOrder":
            update = state.disputes.toSorted((a, b) =>
                a.customerOrder > b.customerOrder ? 1 : b.customerOrder > a.customerOrder ? -1 : 0
            );

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

            return update;
        case "Status":
            update = state.disputes.toSorted((a, b) =>
                a.status > b.status ? 1 : b.status > a.status ? -1 : 0
            );
            return update;
        default:
            return state.disputes;
    }
};
