// actions/index.js
import {
    ADD_DISPUTE,
    SEARCH_DISPUTES,
    TOGGLE_FILTER_DISPUTES,
    TOGGLE_INSIGHTS
} from "../actions/index";

export const addDispute = (newDispute) => ({
    type: ADD_DISPUTE,
    payload: newDispute
});

export const toggleInsights = () => ({
    type: TOGGLE_INSIGHTS
});

export const searchDisputes = (data) => ({
    type: SEARCH_DISPUTES,
    payload: data
});

export const toggleFilterDisputes = (data) => ({
    type: TOGGLE_FILTER_DISPUTES,
    payload: data
});
