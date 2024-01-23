import { DISPLAY_FEEDBACK_MODAL } from "../actions";

const initialState = {
  displayFeedbackModal: false,
};

const feedbackReducer = (state = initialState, action) => {

  switch (action.type) {
    case DISPLAY_FEEDBACK_MODAL:
      return {
       displayFeedbackModal:action.payload
    }
    default:
      return state;
  }
};

export default feedbackReducer;
