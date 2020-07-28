'use strick';
import { all, fork } from 'redux-saga/effects';

import {watchLogin} from './loginsaga';
import {watchGetUser} from './getUserSaga';

export default function* rootSaga() {
    yield all([
        watchLogin,
        watchGetUser
    ].map(fork));
}
export const BASE_URL = 'https://reqres.in';
