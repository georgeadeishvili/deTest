import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import RegReducer from './RegReducer';

export default combineReducers({
    auth: AuthReducer,
    reg: RegReducer
})
