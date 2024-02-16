import * as actionTypes from "../actions";

export const productCatalogue = () => ({
    type: actionTypes.PRODUCT_CATALOGUE,
});

export const searchProduct = (data) => ({
    type: actionTypes.SEARCH_PRODUCT,
    payload: data
});

export const sortCatalogue = (data) => ({
    type: actionTypes.SORT_CATALOGUE,
    payload: data
});
