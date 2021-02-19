import { getRoot } from 'api';
import { call, put } from 'redux-saga/effects';
import { fetchResourceFailed, fetchResourceSuccess } from './action';
import { FetchResourceActionType, FetchResponseInterface } from './type';

export function* fetchBaseResourceSaga(action: FetchResourceActionType) {
  const { url } = action.payload as FetchResponseInterface;

  try {
    const response = yield call(getRoot, url);

    yield put(fetchResourceSuccess(response));
  } catch (errors) {
    yield put(fetchResourceFailed(errors.response.data.message));
  }
}
