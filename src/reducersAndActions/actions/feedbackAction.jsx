import { DISPLAY_FEEDBACK_MODAL } from ".";

export const setDisplayFeedbackModal = (bool) => ({
  type: DISPLAY_FEEDBACK_MODAL,
  payload: bool,
});
