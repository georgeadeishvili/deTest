import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  SELECT_USER,
  LOGOUT_USER,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAIL
} from '../actions/types';

const INITIAL_STATE = { email: '', password: '', user: null, error: '', loading: false, username: null };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case LOGIN_USER:
      return { ...state, loading: true, error: '', };
    case SELECT_USER:
      return { ...state, ...INITIAL_STATE, username: action.payload, email:action.payloadi};
    case LOGIN_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload };
    case LOGIN_USER_FAIL:
      return { ...state, error: 'Authentication Failed', loading: false };
    case LOGOUT_USER:
      return { ...state, loading: true, error: '' };
    case LOGOUT_USER_SUCCESS: 
      return { ...state, ...INITIAL_STATE };
    case LOGOUT_USER_FAIL: 
      return { ...state, error: 'Something went wrong', loading: false };
    default:
      return state;
  }
};
