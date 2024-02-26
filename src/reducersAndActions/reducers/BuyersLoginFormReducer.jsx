import { BUYERS_LOGIN_SUBMIT_FORM, BUYERS_SET_LOGIN_FORM_ERRORS, BUYERS_SET_AUTHENTICATED } from '../actions';

const initialStoreData = {
  email: '',
  password: '',
};

const initialState = {
  formData: initialStoreData,
  errors: {},
  isAuthenticated: localStorage.getItem('valid_token')? true: false
};

const buyersLoginFormReducer = (state = initialState, action) => {
    switch (action.type) {
      case BUYERS_LOGIN_SUBMIT_FORM:
        return {
          ...state,
          formData: {
            ...state.formData,
            ...(action.payload || {}),
          },
          isAuthenticated: true,
        };
      case BUYERS_SET_LOGIN_FORM_ERRORS:
        return {
          ...state,
          errors: action.payload,
        };
      case BUYERS_SET_AUTHENTICATED:
        return {
          ...state,
          isAuthenticated: action.payload,
        };
      default:
        return state;
    }
  };

export default buyersLoginFormReducer;