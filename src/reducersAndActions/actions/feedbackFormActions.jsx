export const TOGGLE_FEEDBACK_FORM = 'TOGGLE_FEEDBACK_FORM';
export const SUBMIT_FEEDBACK_FORM = 'SUBMIT_FEEDBACK_FORM'; 
export const UPDATE_EMAIL = 'UPDATE_EMAIL';
export const UPDATE_QUESTION = 'UPDATE_QUESTION';

export const toggleFeedbackForm = () => {
  return {
    type: TOGGLE_FEEDBACK_FORM,
  };
};

export const submitFeedbackForm = (formData) => {
  return {
    type: SUBMIT_FEEDBACK_FORM,
    payload: formData,
  };
};

export const updateEmail = (email) => ({
  type: UPDATE_EMAIL,
  payload: email,
});

export const updateQuestion = (question) => ({
  type: UPDATE_QUESTION,
  payload: question,
});