import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    RE_PASSWORD_CHANGED,
    USERNAME_CHANGED,
    REGISTER_USER,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL
} from '../actions/types';

const INITIAL_STATE = {
    email: '',
    password: '',
    rePassword: '',
    username: '',
    user: null,
    error: '',
    loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USERNAME_CHANGED:
      return { ...state, username: action.payload };
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case RE_PASSWORD_CHANGED:
      return { ...state, rePassword: action.payload };
    case REGISTER_USER:
      return { ...state, loading: true, error: '' };
    case REGISTER_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload };
    case REGISTER_USER_FAIL:
      return { ...state, error: 'Authentication Failed', loading: false };
    default:
      return state;
  }
};
