import { put, call, takeLatest } from 'redux-saga/effects';
import * as types from '../typeActions';
import axios from 'axios';

 function* handleLogin(action) {
    try {
      console.log('loggin');
      
        const apiConfig = {
          method: 'post',
          url: 'https://jsonplaceholder.typicode.com/posts',
          data: {
            userId: action.payload.userId
          }
        };
    
        const response = yield call(axios, apiConfig);
        console.log(response),'res';
        yield put({type: types.LOGIN_SUCCESS, payload: response.data });
      } catch (e) {
        console.log(e,'eee');
        yield put({type: types.LOGIN_FAILED, payload: e.message });
      }
}

export function* watchLogin() {
  console.log('loggin watch');
    yield takeLatest(types.LOGIN_ACTION, handleLogin)
}