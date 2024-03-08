import { LOGIN_SUBMIT_FORM, SET_LOGIN_FORM_ERRORS, SELLERS_SET_AUTHENTICATED, SELLERS_SET_USERS_DATA } from '.';

export const submitLoginForm = (formData) => ({
  type: LOGIN_SUBMIT_FORM,
  payload: formData,
});

export const setLoginFormErrors = (errors) => ({
  type: SET_LOGIN_FORM_ERRORS,
  payload: errors,
});
export const setAuthenticated = (isAuthenticated) => ({
  type: SELLERS_SET_AUTHENTICATED,
  payload: isAuthenticated,
});

export const setUsersData = (usersData) => ({
    type: SELLERS_SET_USERS_DATA,
    payload:usersData
});