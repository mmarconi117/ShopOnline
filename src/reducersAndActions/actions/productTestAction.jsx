import * as actionTypes from ".";

export const setProductDetails = (data) => ({
    type: actionTypes.SET_PRODUCT,
    payload: data,
});

export const getProductDetails = () => ({
    type: actionTypes.GET_PRODUCT,
});
