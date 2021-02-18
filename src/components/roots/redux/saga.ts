import { fetchBase } from 'lib/api';
import { call, put } from 'redux-saga/effects';
import { fetchRootFailed, fetchRootSuccess } from './action';

export function* fetchRootSaga() {
  try {
    const response = yield call(fetchBase, '');

    yield put(fetchRootSuccess(response));
  } catch (errors) {
    yield put(fetchRootFailed(errors.response.data.message));
  }
}
