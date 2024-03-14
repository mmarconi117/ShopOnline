import { LOGIN_SUBMIT_FORM, SET_LOGIN_FORM_ERRORS, SELLERS_SET_AUTHENTICATED, SELLERS_SET_USERS_DATA } from '../actions';

const initialStoreData = {
  email: '',
  password: '',
};

const initialState = {
  formData: initialStoreData,
  errors: {},
  usersData: {},
  isAuthenticated: localStorage.getItem('valid_token_seller') ? true : false,
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
    case SELLERS_SET_AUTHENTICATED:
      return {
        ...state,
        isAuthenticated: action.payload,
      };
    case SELLERS_SET_USERS_DATA:
      const isAuthenticated = action.payload.role === 'seller';
      return {
        ...state,
        usersData: action.payload,
        isAuthenticated,
      };
    default:
      return state;
  }
};

export default loginFormReducer;

