import { combineReducers } from 'redux';
import login from './loginReducer';
import getUser from './getUserReducer';

const allReducers = combineReducers({
     login,
     getUser
})
export default allReducers