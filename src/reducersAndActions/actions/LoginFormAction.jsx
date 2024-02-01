import { LOGIN_SUBMIT_FORM, SET_LOGIN_FORM_ERRORS } from '.';

export const submitLoginForm = (formData) => ({
  type: LOGIN_SUBMIT_FORM,
  payload: formData,
});

export const setLoginFormErrors = (errors) => ({
  type: SET_LOGIN_FORM_ERRORS,
  payload: errors,
});