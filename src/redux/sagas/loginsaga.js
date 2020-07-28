import { put, call, takeLatest } from 'redux-saga/effects';
import * as types from '../typeActions';
import axios from 'axios';
import {BASE_URL} from './index';

 function* handleLogin(action) {
    try {      
        const apiConfig = {
          method: 'post',
          url: BASE_URL+'/api/login',
          data: action.payload
        };
    
        const response = yield call(axios, apiConfig);
        console.log(response),'res';
        yield put({type: types.LOGIN_SUCCESS, payload: response.data });
      } catch (e) {
        console.log(e,'err');
        yield put({type: types.LOGIN_FAILED, payload: e.message });
      }
}

export function* watchLogin() {
    yield takeLatest(types.LOGIN_ACTION, handleLogin)
}