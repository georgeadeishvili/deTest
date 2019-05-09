import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import RegReducer from './RegReducer';
import AdjaraReducer from './AdjaraReducer';
import ResReducer from './ResReducer';

export default combineReducers({
    auth: AuthReducer,
    reg: RegReducer,
    res: ResReducer,
    movies: AdjaraReducer
})
