import * as actionTypes from '../actions';

const initialState = {
    displayEmailModal: false,
    email: '',
    subject: '',
    message: '',
    name: '',
};

const emailModalReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.TOGGLE_EMAIL_MODAL:
            return {
                ...state,
                displayEmailModal: action.payload,
            };
        case actionTypes.SET_EMAIL_MODAL_NAME:
            return {
                ...state,
                name: action.payload,
            };
        case actionTypes.SET_EMAIL_MODAL_EMAIL:
            return {
                ...state,
                email: action.payload,
            };
        case actionTypes.SET_EMAIL_MODAL_SUBJECT:
            return {
                ...state,
                subject: action.payload,
            };
        case actionTypes.SET_EMAIL_MODAL_MESSAGE:
            return {
                ...state,
                message: action.payload,
            };
        default:
            return state;
    }
};

export default emailModalReducer;
