import { put, call, takeLatest } from 'redux-saga/effects';
import * as types from '../typeActions';
import axios from 'axios';
import {BASE_URL} from './index';

 function* handleGetUser(action) {
    try {      
        const apiConfig = {
          method: 'get',
          url: BASE_URL+'/api/users?page=2',
          data:{page: 2,
            per_page: 6,
            total: 12,
            total_pages: 2}
        };
    
        const response = yield call(axios, apiConfig);
        console.log(response),'res';
        yield put({type: types.GET_USER_SUCCESS, payload: response.data });
      } catch (e) {
        console.log(e,'err');
        yield put({type: types.GET_USER_FAILED, payload: e.message });
      }
}

export function* watchGetUser() {
    yield takeLatest(types.GET_USER_ACTION, handleGetUser)
}