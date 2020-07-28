import * as types from '../typeActions'
const initialState = {
    currentUser: [],
  }
const getUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_USER_SUCCESS:
            return {
              ...state,
              currentUser: action.payload.data,
            }
        default:
            return state
    }
}
export default getUserReducer