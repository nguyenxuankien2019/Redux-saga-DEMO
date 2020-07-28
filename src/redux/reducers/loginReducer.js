import * as types from '../typeActions'
const initialState = {
    currentUser: {},
    token: '',
    loginSuccess:false
  }
const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN_SUCCESS:
            return {
              ...state,
              token: action.payload.token,
              loginSuccess: true
            }
            case types.CLEARTOKEN:
              return {
                token: '',
                loginSuccess:false
              }
        default:
            return state
    }
}
export default loginReducer