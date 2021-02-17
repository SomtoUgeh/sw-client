import { renderHook, act } from '@testing-library/react-hooks';
import { useLocalStorage } from '../../hooks/useLocalStorage';

test('check that it stores information', () => {
	const { result } = renderHook(() => useLocalStorage('name', ''));
	const dataToSave = 'Somtochukwu Medua-Ugeh';

	const saveData = result.current.setValue;
	act(() => {
		saveData(dataToSave);
	});

	expect(result.current.storedValue).toEqual(dataToSave);
});
