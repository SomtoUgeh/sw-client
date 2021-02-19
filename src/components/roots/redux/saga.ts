import { getRoots } from 'api';
import { call, put } from 'redux-saga/effects';
import { fetchRootFailed, fetchRootSuccess } from './action';

export function* fetchRootSaga() {
  try {
    const response = yield call(getRoots);
    yield put(fetchRootSuccess(response));
  } catch (error) {
    const err =
      error?.response?.data?.message ??
      'Something went wrong, please try again';

    yield put(fetchRootFailed(err));
  }
}
