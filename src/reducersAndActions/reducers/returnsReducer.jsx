import * as actionTypes from "../actions";

export const initialState = {
    returns: [
        {
            orderNumber: 15,
            purchaseOrderNumber: 6,
            rmaNumber: 11,
            customerOrderNumber: 17,
            price: 2222,
            status: 27,
            selected: false
        },
        {
            orderNumber: 2,
            purchaseOrderNumber: 7,
            rmaNumber: 12,
            customerOrderNumber: 18,
            price: 232,
            status: 28,
            selected: false
        },
        {
            orderNumber: 3,
            purchaseOrderNumber: 8,
            rmaNumber: 13,
            customerOrderNumber: 19,
            price: 242,
            status: 29,
            selected: false
        },
        {
            orderNumber: 4,
            purchaseOrderNumber: 9,
            rmaNumber: 14,
            customerOrderNumber: 20,
            price: 252,
            status: 30,
            selected: false
        },
        {
            orderNumber: 5,
            purchaseOrderNumber: 10,
            rmaNumber: 15,
            customerOrderNumber: 21,
            price: 262,
            status: 30,
            selected: false
        },
        {
            orderNumber: 15,
            purchaseOrderNumber: 6,
            rmaNumber: 11,
            customerOrderNumber: 17,
            price: 2222,
            status: 27,
            selected: false
        },
        {
            orderNumber: 2,
            purchaseOrderNumber: 7,
            rmaNumber: 12,
            customerOrderNumber: 18,
            price: 232,
            status: 28,
            selected: false
        },
        {
            orderNumber: 3,
            purchaseOrderNumber: 8,
            rmaNumber: 13,
            customerOrderNumber: 19,
            price: 242,
            status: 29,
            selected: false
        },
        {
            orderNumber: 4,
            purchaseOrderNumber: 9,
            rmaNumber: 14,
            customerOrderNumber: 20,
            price: 252,
            status: 30,
            selected: false
        },
        {
            orderNumber: 5,
            purchaseOrderNumber: 10,
            rmaNumber: 15,
            customerOrderNumber: 21,
            price: 262,
            status: 30,
            selected: false
        },
        {
            orderNumber: 15,
            purchaseOrderNumber: 6,
            rmaNumber: 11,
            customerOrderNumber: 17,
            price: 2222,
            status: 27,
            selected: false
        },
        {
            orderNumber: 2,
            purchaseOrderNumber: 7,
            rmaNumber: 12,
            customerOrderNumber: 18,
            price: 232,
            status: 28,
            selected: false
        },
        {
            orderNumber: 3,
            purchaseOrderNumber: 8,
            rmaNumber: 13,
            customerOrderNumber: 19,
            price: 242,
            status: 29,
            selected: false
        },
        {
            orderNumber: 4,
            purchaseOrderNumber: 9,
            rmaNumber: 14,
            customerOrderNumber: 20,
            price: 252,
            status: 30,
            selected: false
        },
        {
            orderNumber: 5,
            purchaseOrderNumber: 10,
            rmaNumber: 15,
            customerOrderNumber: 21,
            price: 262,
            status: 30,
            selected: false
        },
        {
            orderNumber: 15,
            purchaseOrderNumber: 6,
            rmaNumber: 11,
            customerOrderNumber: 17,
            price: 2222,
            status: 27,
            selected: false
        },
        {
            orderNumber: 2,
            purchaseOrderNumber: 7,
            rmaNumber: 12,
            customerOrderNumber: 18,
            price: 232,
            status: 28,
            selected: false
        },
        {
            orderNumber: 3,
            purchaseOrderNumber: 8,
            rmaNumber: 13,
            customerOrderNumber: 19,
            price: 242,
            status: 29,
            selected: false
        },
        {
            orderNumber: 4,
            purchaseOrderNumber: 9,
            rmaNumber: 14,
            customerOrderNumber: 20,
            price: 252,
            status: 30,
            selected: false
        },
        {
            orderNumber: 5,
            purchaseOrderNumber: 10,
            rmaNumber: 15,
            customerOrderNumber: 21,
            price: 262,
            status: 30,
            selected: false
        },
        {
            orderNumber: 15,
            purchaseOrderNumber: 6,
            rmaNumber: 11,
            customerOrderNumber: 17,
            price: 2222,
            status: 27,
            selected: false
        },
        {
            orderNumber: 2,
            purchaseOrderNumber: 7,
            rmaNumber: 12,
            customerOrderNumber: 18,
            price: 232,
            status: 28,
            selected: false
        },
        {
            orderNumber: 3,
            purchaseOrderNumber: 8,
            rmaNumber: 13,
            customerOrderNumber: 19,
            price: 242,
            status: 29,
            selected: false
        },
        {
            orderNumber: 4,
            purchaseOrderNumber: 9,
            rmaNumber: 14,
            customerOrderNumber: 20,
            price: 252,
            status: 30,
            selected: false
        },
        {
            orderNumber: 5,
            purchaseOrderNumber: 10,
            rmaNumber: 15,
            customerOrderNumber: 21,
            price: 262,
            status: 30,
            selected: false
        },
        {
            orderNumber: 15,
            purchaseOrderNumber: 6,
            rmaNumber: 11,
            customerOrderNumber: 17,
            price: 2222,
            status: 27,
            selected: false
        },
        {
            orderNumber: 2,
            purchaseOrderNumber: 7,
            rmaNumber: 12,
            customerOrderNumber: 18,
            price: 232,
            status: 28,
            selected: false
        },
        {
            orderNumber: 3,
            purchaseOrderNumber: 8,
            rmaNumber: 13,
            customerOrderNumber: 19,
            price: 242,
            status: 29,
            selected: false
        },
        {
            orderNumber: 4,
            purchaseOrderNumber: 9,
            rmaNumber: 14,
            customerOrderNumber: 20,
            price: 252,
            status: 30,
            selected: false
        },
        {
            orderNumber: 5,
            purchaseOrderNumber: 10,
            rmaNumber: 15,
            customerOrderNumber: 21,
            price: 262,
            status: 30,
            selected: false
        }
    ]
};

const returnsReducers = (state = initialState, action) => {
    switch (action.types) {
        case actionTypes.GET_RETURNS:
            return state;
        default:
            return state;
    }
};

export default returnsReducers;
