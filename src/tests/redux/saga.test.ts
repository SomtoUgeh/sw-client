import { fetchBase } from 'lib/api';
import { fetchBaseResourceSaga } from 'redux/saga';
import { getResponseMock } from 'data/GetResponseMock';
import { call, put } from 'redux-saga/effects';
import { fetchResourceRequest, fetchResourceSuccess } from 'redux/action';

describe('check base fetch saga', () => {
	it('success triggers success action with response', () => {
		const url = 'people/';

		const generator = fetchBaseResourceSaga(fetchResourceRequest({ url }));
		const response = { ...getResponseMock };

		expect(generator.next().value).toEqual(call(fetchBase, url));

		expect(generator.next(response).value).toEqual(
			put(fetchResourceSuccess(getResponseMock)),
		);
	});
});
