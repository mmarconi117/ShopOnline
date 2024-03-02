// cartReducer.js

import { SET_CARTS, REMOVE_ITEM_FROM_CART, ADD_TO_CART, UPDATE_CART_QUANTITY, INCREASE_QUANTITY_CART, DECREASE_QUANTITY_CART } from "../actions/index";

const initialState = {
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
        carts: state.carts.filter((item) => item.id !== action.payload.id),
      };
    case UPDATE_CART_QUANTITY:
      return {
        ...state,
        carts: state.carts.map((item) =>
          item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item
        ),
      };
    case INCREASE_QUANTITY_CART:
      return {
        ...state,
        carts: state.carts.map((item) =>
          item.id === action.payload.productId ? { ...item, quantity: item.quantity + 1 } : item
        ),
      };
    case DECREASE_QUANTITY_CART:
      return {
        ...state,
        carts: state.carts.map((item) =>
          item.id === action.payload.productId ? { ...item, quantity: item.quantity - 1 } : item
        ),
      };
    default:
      return state;
  }
};

export default cartReducer;
