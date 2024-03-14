
import { TOGGLE_DISPUTE, TOGGLE_INSIGHTS, UPDATE_STATUS_FILTER } from "../actions/index";


export const toggleInsights = () => ({
  type: TOGGLE_INSIGHTS,
});


export const updateStatusFilter = (status) => ({
  type: UPDATE_STATUS_FILTER,
  payload: status,
});

export const toggleDispute = (data) => ({
    type: TOGGLE_DISPUTE,
    payload: data
});
