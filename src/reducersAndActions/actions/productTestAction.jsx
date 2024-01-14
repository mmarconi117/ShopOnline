import { SET_PRODUCT, GET_PRODUCT } from ".";

export const setProductDetails = (data) => ({
    type: SET_PRODUCT,
    payload: data,
});

export const getProductDetails = () => ({
    type: GET_PRODUCT,
});
