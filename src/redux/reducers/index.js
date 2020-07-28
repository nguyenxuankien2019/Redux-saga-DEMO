import { combineReducers } from 'redux';
import login from './loginReducer';

const allReducers = combineReducers({
    login : login
})
export default allReducers