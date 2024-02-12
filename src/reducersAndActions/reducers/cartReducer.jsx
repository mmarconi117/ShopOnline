import { SET_CARTS, REMOVE_ITEM_FROM_CART, ADD_TO_CART, UPDATE_CART_QUANTITY } from "../actions";

export const initialState = {
    carts: [],
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CARTS:
            return {
                ...state,
                carts: action.payload,
            };
        case ADD_TO_CART:
            return {
                ...state,
                carts: [...state.carts, action.payload],
            };
        case REMOVE_ITEM_FROM_CART:
            return {
                ...state,
                carts: state.carts.filter((item, index) => index !== action.payload),
            };
        case UPDATE_CART_QUANTITY:
            return {
                ...state,
                carts: state.carts.map((item) => {
                    if (item.id === action.payload.id) {
                        return {
                            ...item,
                            number_of_product: action.payload.quantity,
                        };
                    }
                    return item;
                }),
            };
        default:
            return state;
    }
};

export default cartReducer;
