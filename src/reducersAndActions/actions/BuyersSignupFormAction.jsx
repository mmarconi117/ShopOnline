import { BUYERS_SIGNUP_FORM, BUYERS_SIGNUP_FORM_ERRORS } from '.';

export const submitForm = (formData) => ({
  type: BUYERS_SIGNUP_FORM,
  payload: formData,
});

export const setFormErrors = (errors) => ({
  type: BUYERS_SIGNUP_FORM_ERRORS,
  payload: errors,
});