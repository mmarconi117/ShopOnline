import { SIGNUP_SUBMIT_FORM, SET_FORM_ERRORS } from '../actions';

const initialStoreData = {
  name: '',
  workEmail: '',
  legalBusinessName: '',
  password: '',
};

const initialState = {
  formData: initialStoreData,
  errors: {},
};

const signupFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_SUBMIT_FORM:
      return {
        ...state,
        formData: {
          ...state.formData,
          ...(action.payload || {}),
        },
      };
    case SET_FORM_ERRORS:
      return {
        ...state,
        errors: action.payload,
      };
      
    default:
      return state;
  }
};

export default signupFormReducer;

