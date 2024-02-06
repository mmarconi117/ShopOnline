// actions/index.js
import { ADD_DISPUTE, TOGGLE_INSIGHTS } from "../actions/index";

export const addDispute = (newDispute) => ({
  type: ADD_DISPUTE,
  payload: newDispute,
});

export const toggleInsights = () => ({
  type: TOGGLE_INSIGHTS,
});
