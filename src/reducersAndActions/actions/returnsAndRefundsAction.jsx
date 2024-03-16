import { SEARCH_DISPUTES, TOGGLE_FILTER_DISPUTES } from "./index";

export const searchDisputes = (data) => ({
    type: SEARCH_DISPUTES,
    payload: data
});

export const toggleFilterDisputes = (data) => ({
    type: TOGGLE_FILTER_DISPUTES,
    payload: data
});
