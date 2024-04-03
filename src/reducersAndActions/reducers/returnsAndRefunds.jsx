import { SEARCH_DISPUTES, TOGGLE_FILTER_DISPUTES } from "../actions";

const initialState = {
    disputes: [
        {
            id: 1,
            orderNumber: 11122274329,
            purchaseOrder: 13413945139481,
            rma: "E12341Y13",
            customerOrder: 54,
            price: 12,
            status: "Initiated",
        },
        {
            id: 2,
            orderNumber: 11122274329,
            purchaseOrder: 13413945139481,
            rma: "E12341Y13",
            customerOrder: 6,
            price: 102,
            status: "Received",
        },
        {
            id: 3,
            orderNumber: 11122274329,
            purchaseOrder: 13413945139481,
            rma: "E12341Y13",
            customerOrder: 89,
            price: 112,
            status: "Completed",
        },
        {
            id: 4,
            orderNumber: 11122274329,
            purchaseOrder: 13413945139481,
            rma: "E12341Y13",
            customerOrder: 23,
            price: 125,
            status: "Initiated",
        },
        {
            id: 5,
            orderNumber: 11122274329,
            purchaseOrder: 13413945139481,
            rma: "E12341Y13",
            customerOrder: 54,
            price: 12,
            status: "Initiated",
        },
        {
            id: 6,
            orderNumber: 11122274329,
            purchaseOrder: 13413945139481,
            rma: "E12341Y13",
            customerOrder: 6,
            price: 102,
            status: "Received",
        },
        {
            id: 7,
            orderNumber: 11122274329,
            purchaseOrder: 13413945139481,
            rma: "E12341Y13",
            customerOrder: 89,
            price: 112,
            status: "Completed",
        },
        {
            id: 8,
            orderNumber: 11122274329,
            purchaseOrder: 13413945139481,
            rma: "E12341Y13",
            customerOrder: 23,
            price: 125,
            status: "Initiated",
        },
        {
            id: 9,
            orderNumber: 11122274329,
            purchaseOrder: 13413945139481,
            rma: "E12341Y13",
            customerOrder: 54,
            price: 12,
            status: "Initiated",
        },
        {
            id: 10,
            orderNumber: 11122274329,
            purchaseOrder: 13413945139481,
            rma: "E12341Y13",
            customerOrder: 6,
            price: 102,
            status: "Received",
        },
        {
            id: 11,
            orderNumber: 11122274329,
            purchaseOrder: 13413945139481,
            rma: "E12341Y13",
            customerOrder: 89,
            price: 112,
            status: "Completed",
        },
        {
            id: 12,
            orderNumber: 11122274329,
            purchaseOrder: 13413945139481,
            rma: "E12341Y13",
            customerOrder: 23,
            price: 125,
            status: "Initiated",
        },
        {
            id: 13,
            orderNumber: 11122274329,
            purchaseOrder: 13413945139481,
            rma: "E12341Y13",
            customerOrder: 54,
            price: 12,
            status: "Initiated",
        },
        {
            id: 14,
            orderNumber: 11122274329,
            purchaseOrder: 13413945139481,
            rma: "E12341Y13",
            customerOrder: 6,
            price: 102,
            status: "Received",
        },
        {
            id: 15,
            orderNumber: 11122274329,
            purchaseOrder: 13413945139481,
            rma: "E12341Y13",
            customerOrder: 89,
            price: 112,
            status: "Completed",
        },
        {
            id: 16,
            orderNumber: 11122274329,
            purchaseOrder: 13413945139481,
            rma: "E12341Y13",
            customerOrder: 23,
            price: 125,
            status: "Initiated",
        },
        {
            id: 17,
            orderNumber: 11122274329,
            purchaseOrder: 13413945139481,
            rma: "E12341Y13",
            customerOrder: 54,
            price: 12,
            status: "Initiated",
        },
        {
            id: 18,
            orderNumber: 11122274329,
            purchaseOrder: 13413945139481,
            rma: "E12341Y13",
            customerOrder: 6,
            price: 102,
            status: "Received",
        },
        {
            id: 19,
            orderNumber: 11122274329,
            purchaseOrder: 13413945139481,
            rma: "E12341Y13",
            customerOrder: 89,
            price: 112,
            status: "Completed",
        },
        {
            id: 20,
            orderNumber: 11122274329,
            purchaseOrder: 13413945139481,
            rma: "E12341Y13",
            customerOrder: 23,
            price: 125,
            status: "Initiated",
        },
        
        
    ],
    filtered: []
};

const returnsAndRefundsReducer = (state = initialState, action) => {
    switch (action.type) {
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

export default returnsAndRefundsReducer;

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
