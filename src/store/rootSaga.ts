import { FETCH_RESOURCE } from 'redux/type';
import { FETCH_ROOT } from 'components/roots/redux/type';
import { fetchBaseResourceSaga } from 'redux/saga';
import { fetchRootSaga } from 'components/roots/redux/saga';
import { takeLatest } from 'redux-saga/effects';

export default function* rootSaga() {
  yield takeLatest(FETCH_ROOT, fetchRootSaga);
  yield takeLatest(FETCH_RESOURCE, fetchBaseResourceSaga);
}
