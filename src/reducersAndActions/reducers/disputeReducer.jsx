import { UPDATE_STATUS_FILTER, TOGGLE_INSIGHTS, TOGGLE_DISPUTE } from "../actions";

const initialState = {
    disputes: [
        {
            orderNumber: "CHA123",
            price: 50,
            purchaseOrder: "OE123",
            rma: "RMA456",
            customerOrder: "PL789",
            status: "In Review"
        },
        {
            orderNumber: "LMK456",
            price: 75,
            purchaseOrder: "EJS456",
            rma: "RMA789",
            customerOrder: "AJ123",
            status: "Pending Review"
        },
        {
            orderNumber: "WKS789",
            price: 100,
            purchaseOrder: "IJ789",
            rma: "RMA123",
            customerOrder: "456",
            status: "Action Needed"
        },
        {
            orderNumber: "DEF123",
            price: 60,
            purchaseOrder: "PO123",
            rma: "RMA456",
            customerOrder: "CO789",
            status: "In Review"
        },
        {
            orderNumber: "GHI456",
            price: 80,
            purchaseOrder: "PO456",
            rma: "RMA789",
            customerOrder: "CO123",
            status: "Pending Review"
        },
        {
            orderNumber: "JKL789",
            price: 110,
            purchaseOrder: "PO789",
            rma: "RMA123",
            customerOrder: "CO456",
            status: "Action Needed"
        },
        {
            orderNumber: "MNO123",
            price: 70,
            purchaseOrder: "OE123",
            rma: "RMA456",
            customerOrder: "PL789",
            status: "In Review"
        },
        {
            orderNumber: "PQR456",
            price: 90,
            purchaseOrder: "EJS456",
            rma: "RMA789",
            customerOrder: "AJ123",
            status: "Pending Review"
        },
        {
            orderNumber: "STU789",
            price: 120,
            purchaseOrder: "IJ789",
            rma: "RMA123",
            customerOrder: "456",
            status: "Action Needed"
        },
        {
            orderNumber: "VWX123",
            price: 80,
            purchaseOrder: "PO123",
            rma: "RMA456",
            customerOrder: "CO789",
            status: "In Review"
        },
        {
            orderNumber: "HSA123",
            price: 50,
            purchaseOrder: "OP123",
            rma: "RMA678",
            customerOrder: "RE876",
            status: "Closed"
        }
    ],
    showInsights: true,
    statusFilter: "All"
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
