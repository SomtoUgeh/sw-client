import { FetchResourceActionType } from './type';
import { fetchBase } from 'lib/api';
import { call, put } from 'redux-saga/effects';
import { fetchResourceFailed, fetchResourceSuccess } from './action';

export function* fetchBaseResourceSaga(action: FetchResourceActionType) {
	// @ts-ignore
	const { url } = action.payload;

	try {
		const response = yield call(fetchBase, url);

		yield put(fetchResourceSuccess(response));
	} catch (errors) {
		yield put(fetchResourceFailed(errors.response.data.message));
	}
}
