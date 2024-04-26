import * as actionTypes from '.';

export const toggleEmailModal = (bool) => ({
    type: actionTypes.TOGGLE_EMAIL_MODAL,
    payload: bool,
});
export const updateEmail = (data) => ({
    type: actionTypes.SET_EMAIL_MODAL_EMAIL,
    payload: data,
});
export const updateName = (data) => ({
    type: actionTypes.SET_EMAIL_MODAL_NAME,
    payload: data,
});
export const updateSubject = (data) => ({
    type: actionTypes.SET_EMAIL_MODAL_SUBJECT,
    payload: data,
});
export const updateMessage = (data) => ({
    type: actionTypes.SET_EMAIL_MODAL_MESSAGE,
    payload: data,
});
