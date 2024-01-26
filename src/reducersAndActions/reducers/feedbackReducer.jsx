import {
  DISPLAY_FEEDBACK_MODAL,
  SET_FEEDBACK_EMAIL,
  SET_FEEDBACK_INPUT,
} from "../actions";

const initialState = {
  displayFeedbackModal: false,
  feedbackInput: "",
  email: "",
};

const feedbackReducer = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_FEEDBACK_MODAL:
      return {
        ...state,
        displayFeedbackModal: action.payload,
      };
    case SET_FEEDBACK_INPUT:
      return {
        ...state,
        feedbackInput: action.payload,
      };
    case SET_FEEDBACK_EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    default:
      return state;
  }
};

export default feedbackReducer;
