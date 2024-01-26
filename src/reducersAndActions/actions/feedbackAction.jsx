import { DISPLAY_FEEDBACK_MODAL, SET_FEEDBACK_INPUT,SET_FEEDBACK_EMAIL} from ".";

export const setDisplayFeedbackModal = (bool) => ({
  type: DISPLAY_FEEDBACK_MODAL,
  payload: bool,
});

export const setFeedbackInput = (feedbackInput) => ({
  type: SET_FEEDBACK_INPUT,
  payload: feedbackInput,
});

export const setFeedbackEmail = (email) => ({
  type: SET_FEEDBACK_EMAIL,
  payload: email,
});
