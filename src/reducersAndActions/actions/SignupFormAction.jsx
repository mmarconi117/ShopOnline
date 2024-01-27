import { SIGNUP_SUBMIT_FORM, SET_FORM_ERRORS } from '.';

export const submitForm = (formData) => ({
  type: SIGNUP_SUBMIT_FORM,
  payload: formData,
});

export const setFormErrors = (errors) => ({
  type: SET_FORM_ERRORS,
  payload: errors,
});