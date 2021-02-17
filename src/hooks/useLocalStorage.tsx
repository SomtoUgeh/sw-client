/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';

export function useLocalStorage<StorageType>(
	key: string,
	initialValue: any,
): readonly [StorageType, (value: any) => void] {
	// State to store our value
	// Pass initial state function to useState so logic is only executed once
	const [storedValue, setStoredValue] = useState<StorageType>(() => {
		try {
			// Get from local storage by key
			const item = window.localStorage.getItem(key);
			// Parse stored json or if none return initialValue
			return item ? JSON.parse(item) : initialValue;
		} catch (error) {
			// If error also return initialValue
			throw Error('Please check your values!');
		}
	});

	// Return a wrapped version of useState's setter function that ...
	// ... persists the new value to localStorage.
	const setValue = (value: any): void => {
		try {
			// Allow value to be a function so we have same API as useState
			const valueToStore =
				value instanceof Function ? value(storedValue) : value;

			// Save state
			setStoredValue(valueToStore);

			// Save to local storage
			window.localStorage.setItem(key, JSON.stringify(valueToStore));
		} catch (error) {
			// A more advanced implementation would handle the error case
			throw Error('Please check your values!');
		}
	};

	return [storedValue, setValue] as const;
}
