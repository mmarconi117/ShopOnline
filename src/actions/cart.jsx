import { ADD_TO_CART, REMOVE_ITEM_FROM_CART, UPDATE_CART } from ".";

export const addToCart = (data) => ({
    type: ADD_TO_CART,
    payload: data,
});

export const removeFromCart = (data) => ({
    type: REMOVE_ITEM_FROM_CART,
    payload: data,
});

export const updateCart = (data) => ({
    type: UPDATE_CART,
    payload: data,
});
