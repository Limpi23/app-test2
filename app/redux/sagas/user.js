import {takeLatest, call, put} from 'redux-saga/effects';
import {GET_USER_START, GET_USER_SUCCESS} from '../consts/actionTypes';

import apiCall from '../api/index';

export function* getUsers({payload}) {
  try {
    const url = '/users';
    const method = 'GET';
    const results = yield call(apiCall, url, method);
    yield put({type: GET_USER_SUCCESS, results: results.data});
  } catch (error) {
    console.log(error);
  }
}

export default function* user() {
  yield takeLatest(GET_USER_START, getUsers);
}
