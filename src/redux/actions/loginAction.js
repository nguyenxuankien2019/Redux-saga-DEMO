import * as types from '../typeActions';

export const loginAction = (payload) => {
    return {
      type: types.LOGIN_ACTION,
      payload
    }
  }
  
  export const loginSuccess = (payload) => {
    return {
      type: types.LOGIN_SUCCESS,
      payload
    }
  }
  
  export const loginFailed = (payload) => {
    return {
      type: types.LOGIN_FAILED,
      payload
    }
  }

  export const clearToken = (payload) => {
    return {
      type: types.CLEARTOKEN,
      payload
    }
  }