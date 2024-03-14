import { BUYERS_LOGIN_SUBMIT_FORM, BUYERS_SET_LOGIN_FORM_ERRORS, BUYERS_SET_AUTHENTICATED, BUYERS_SET_USERS_DATA } from '../actions';

const initialStoreData = {
  email: '',
  password: '',
};

const initialState = {
  formData: initialStoreData,
  errors: {
    message: '',
  },
  usersData: {},
  isAuthenticated: localStorage.getItem('valid_token_buyer') ? true : false,
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
    case BUYERS_SET_USERS_DATA:
      const isAuthenticated = action.payload.role === 'buyer';
      return {
        ...state,
        usersData: action.payload,
        isAuthenticated,
      };
    default:
      return state;
  }
};

export default buyersLoginFormReducer;