'use strick';
import { all, fork } from 'redux-saga/effects';

import {watchLogin} from './loginsaga';

export default function* rootSaga() {
    yield all([
        watchLogin
    ].map(fork));
}