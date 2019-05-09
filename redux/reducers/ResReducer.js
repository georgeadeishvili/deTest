import {
    REAUTHENTICATE_USER,
    REAUTHENTICATE_USER_SUCCESS,
    REAUTHENTICATE_USER_FAIL,
    OLD_PASSWORD_ENTERED,
    NEW_PASSWORD_ENTERED,
    CHANGE_PASSWORD,
    CHANGE_PASSWORD_SUCCESS,
    CHANGE_PASSWORD_FAIL
} from '../actions/types';

const INITIAL_STATE = {
  email: "",
  password: "",
  newPassword: "",
  user: null,
  error: "",
  loading: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case REAUTHENTICATE_USER:
            return { ...state, error: '' };
        case REAUTHENTICATE_USER_SUCCESS: 
            return { ...state, user: action.payload };
        case REAUTHENTICATE_USER_FAIL:
            return { ...state, error: 're Authentication fail', loading: false };
        case OLD_PASSWORD_ENTERED:
            return { ...state, password: action.payload };
        case NEW_PASSWORD_ENTERED:
            return { ...state, newPassword: action.payload };
        case CHANGE_PASSWORD:
            return { ...state, error: '', loading: true };
        case CHANGE_PASSWORD_SUCCESS:
            return { ...state, ...INITIAL_STATE, user: action.payload };
        case CHANGE_PASSWORD_FAIL:
            return { ...state, error: 'Password change error', loading: false };
        default:
            return state; 
    }
}