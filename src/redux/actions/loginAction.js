import * as types from '../typeActions';

export const loginAction = (payload) => {
  console.log('loggin');
    return {
      type: types.LOGIN_ACTION,
      payload: payload
    }
  }
  
  export const loginSuccess = (payload) => {
    return {
      type: types.LOGIN_SUCCESS,
      payload: payload
    }
  }
  
  export const loginFailed = () => {
    return {
      type: types.LOGIN_FAILED
    }
  }