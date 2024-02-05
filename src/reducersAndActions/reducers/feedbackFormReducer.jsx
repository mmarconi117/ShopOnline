import { TOGGLE_FEEDBACK_FORM } from '../../reducersAndActions/actions/feedbackFormActions';

const initialState = {
  showFeedbackForm: false,
};

const feedbackFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FEEDBACK_FORM:
      return {
        ...state,
        showFeedbackForm: !state.showFeedbackForm,
      };
    default:
      return state;
  }
};

export default feedbackFormReducer;
