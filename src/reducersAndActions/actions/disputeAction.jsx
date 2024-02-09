
import {
    SEARCH_DISPUTES,
    TOGGLE_FILTER_DISPUTES,
    TOGGLE_INSIGHTS,
    UPDATE_STATUS_FILTER
} from "../actions/index";


export const toggleInsights = () => ({
  type: TOGGLE_INSIGHTS,
});


export const updateStatusFilter = (status) => ({
  type: UPDATE_STATUS_FILTER,
  payload: status,
});

export const searchDisputes = (data) => ({
    type: SEARCH_DISPUTES,
    payload: data
});

export const toggleFilterDisputes = (data) => ({
    type: TOGGLE_FILTER_DISPUTES,
    payload: data
});
