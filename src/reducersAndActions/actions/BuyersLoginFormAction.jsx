import { BUYERS_LOGIN_SUBMIT_FORM, BUYERS_SET_LOGIN_FORM_ERRORS, BUYERS_SET_AUTHENTICATED } from '.';

export const submitBuyersLoginForm = (formData) => ({
  type: BUYERS_LOGIN_SUBMIT_FORM,
  payload: formData,
});

export const setBuyersLoginFormErrors = (errors) => ({
  type: BUYERS_SET_LOGIN_FORM_ERRORS,
  payload: errors,
});

export const setAuthenticated = (isAuthenticated) => ({
  type: BUYERS_SET_AUTHENTICATED,
  payload: isAuthenticated,
});