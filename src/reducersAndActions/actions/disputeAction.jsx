import { TOGGLE_INSIGHTS, UPDATE_STATUS_FILTER, TOGGLE_DROP } from "../actions";

export const toggleInsights = () => ({
  type: TOGGLE_INSIGHTS,
});

export const updateStatusFilter = (status) => ({
  type: UPDATE_STATUS_FILTER,
  payload: status,
});

export const toggleDrop = (isDropdownOpen) => ({
  type: TOGGLE_DROP,
  payload: isDropdownOpen,
});
