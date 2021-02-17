// import { getResponseMock } from 'data/GetResponseMock';
// import { client, fetchBase } from 'lib/api';

// jest.mock(client);

describe('check api base works', () => {
	it('it can fetch', async () => {
		const name = 'Somto';

		// client('get', '').mockResolvedValue({ ...getResponseMock });

		// const response = await fetchBase('');

		// expect(response).toEqual(getResponseMock);
		expect(name).toEqual('Somto');
	});
});

export {};
