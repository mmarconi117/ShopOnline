import { BUYERS_SIGNUP_FORM, BUYERS_SIGNUP_FORM_ERRORS } from '../actions';

const initialStoreData = {
  name: '',
  email: '',
  password: '',
  conPassword:'',
  staySignedIn: false,
};

const initialState = {
  formData: initialStoreData,
  errors: {},
};

const buyersSignupFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUYERS_SIGNUP_FORM:
      return {
        ...state,
        formData: {
          ...state.formData,
          ...(action.payload || {}),
        },
      };
    case BUYERS_SIGNUP_FORM_ERRORS:
      return {
        ...state,
        errors: action.payload,
      };
      
    default:
      return state;
  }
};

export default buyersSignupFormReducer;

