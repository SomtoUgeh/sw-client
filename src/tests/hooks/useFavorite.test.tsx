import { renderHook } from '@testing-library/react-hooks';
import { getResponseMock } from 'data/GetResponseMock';
import { useFavorite } from '../../hooks/useFavorite';

test('check that base resources is correct', () => {
	const { result } = renderHook(() => useFavorite(getResponseMock, 'people'));

	const base = result.current.BASE_RESOURCE;
	const baseResources = [getResponseMock.results?.[0]].map(item => ({
		...item,
		isFav: false,
		favKey: 'people',
	}));

	expect(base).toEqual(baseResources);
});
