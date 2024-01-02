import { ADD_TO_CART, REMOVE_ITEM_FROM_CART, UPDATE_CART } from "../actions";

export const initialState = { products: [] };

export const setCartReducer = (state = initialState, action) => {
    console.log(action.type, "cart reducer");
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                products: [...state.products, action.payload],
            };
        case REMOVE_ITEM_FROM_CART:
            state.products.splice(action.payload, 1);
            return {
                ...state,
                products: state.products,
            };
        default:
            return state;
    }
};

export default setCartReducer;
