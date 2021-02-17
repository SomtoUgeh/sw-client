import * as React from 'react';
import Fuse from 'fuse.js';

export interface BaseInterface {
	[x: string]: unknown;
}

interface UseSearchInterface {
	searchTerm: string;
	setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
	results: BaseInterface[];
	setResults: React.Dispatch<React.SetStateAction<BaseInterface[]>>;
}

/**
 *
 * @param base - Composed base resource for component, contains isFav and favKey attributes
 * @param identifier - unique identifier for resource type. Default is 'name'
 */
export const useSearch = (
	base: BaseInterface[],
	identifier: 'name' | 'title' = 'name',
): UseSearchInterface => {
	const [searchTerm, setSearchTerm] = React.useState('');
	const [results, setResults] = React.useState(base);

	React.useEffect(() => {
		const fuse = new Fuse(base, {
			keys: [identifier],
			threshold: 0.3,
		});

		const searchString = searchTerm.trim();
		const results = fuse.search(searchString).map(({ item }) => item);

		if (results.length > 0) setResults(results);
		else setResults(base);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [searchTerm]);

	React.useEffect(() => {
		if (base) setResults(base);
	}, [base]);

	return { searchTerm, setSearchTerm, results, setResults };
};
