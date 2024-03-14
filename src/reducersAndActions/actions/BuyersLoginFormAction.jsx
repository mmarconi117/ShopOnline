import { BUYERS_LOGIN_SUBMIT_FORM, BUYERS_SET_LOGIN_FORM_ERRORS, BUYERS_SET_AUTHENTICATED, BUYERS_SET_USERS_DATA } from '.';

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

export const setUsersData = (usersData) => ({
    type: BUYERS_SET_USERS_DATA,
    payload:usersData
});