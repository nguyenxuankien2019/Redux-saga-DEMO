import * as types from '../typeActions'
const initialState = {
    currentUser: {},
    loginSuccess: false,

  }
const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN_SUCCESS:
            return {
              ...state,
              currentUser: action.payload.data,
              loginSuccess: true
            }
        default:
            return state
    }
}
export default loginReducer