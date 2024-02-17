import { TOGGLE_FEEDBACK_FORM, SUBMIT_FEEDBACK_FORM, UPDATE_EMAIL, UPDATE_QUESTION } from '../../reducersAndActions/actions/feedbackFormActions';

const initialState = {
  showFeedbackForm: false,
  feedbacks: [],
  email: '',  
  question: '',  
};

const feedbackFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FEEDBACK_FORM:
      return {
        ...state,
        showFeedbackForm: !state.showFeedbackForm,
      };
    case SUBMIT_FEEDBACK_FORM: 
      return {
        ...state,
        feedbacks: [...state.feedbacks, action.payload], 
      };
    case UPDATE_EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    case UPDATE_QUESTION:
      return {
        ...state,
        question: action.payload,
      };
    default:
      return state;
  }
};

export default feedbackFormReducer;
