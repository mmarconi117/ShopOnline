import { LOGIN_SUBMIT_FORM, SET_LOGIN_FORM_ERRORS } from '../actions';

const initialStoreData = {
  email: '',
  password: '',
};

const initialState = {
  formData: initialStoreData,
  errors: {},
};

const loginFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUBMIT_FORM:
      return {
        ...state,
        formData: {
          ...state.formData,
          ...(action.payload || {}),
        },
      };
    case SET_LOGIN_FORM_ERRORS:
      return {
        ...state,
        errors: action.payload,
      };
      
    default:
      return state;
  }
};

export default loginFormReducer;

