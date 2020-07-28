import * as types from '../typeActions';

export const getUserAction = (payload) => {
    return {
      type: types.GET_USER_ACTION,
      payload
    }
  }
  
  export const getUserSuccess = (payload) => {
    return {
      type: types.GET_USER_SUCCESS,
      payload
    }
  }
  
  export const getUserFailed = (payload) => {
    return {
      type: types.GET_USER_FAILED,
      payload
    }
  }