import React from 'react';
import merge from 'lodash.merge';
import keyBy from 'lodash.keyby';
import { BaseInterface } from './useSearch';
import { useLocalStorage } from './useLocalStorage';
import { GetResponseInterface } from 'models/common';
import { useFavorite as useFavoriteContext } from 'contexts/FavoriteContext';

type StorageType = Record<string, unknown>[];

export const useFavorite = (
	resource: GetResponseInterface,
	key: string,
	identifier: 'name' | 'title' = 'name',
) => {
	const { addToFavorite, removeFromFavorite } = useFavoriteContext();
	const [storedFavorites] = useLocalStorage<StorageType>('sw-fav', []);
	const [BASE_RESOURCE, SET_BASE_RESOURCE] = React.useState<BaseInterface[]>(
		resource.results,
	);

	React.useEffect(() => {
		if (resource.results) {
			const filteredFavs = storedFavorites?.filter(item => item.favKey === key);
			const transformedBase = resource?.results.map(res => ({
				...res,
				isFav: false,
				favKey: key,
			}));

			// Attempt to merge arrays
			const updatedCategoryTypes = merge(
				keyBy(transformedBase, identifier),
				keyBy(filteredFavs, identifier),
			);

			const final =
				Object.values(updatedCategoryTypes).map(resource => ({
					...resource,
				})) ?? [];

			SET_BASE_RESOURCE(final);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [resource.results]);

	function toggleFavorite(info: BaseInterface) {
		const items = Array.isArray(BASE_RESOURCE)
			? BASE_RESOURCE.map(item => {
					if (item?.[identifier] === info?.[identifier]) {
						if (Boolean(info?.isFav)) {
							removeFromFavorite(info?.[identifier] as string, key, identifier);
						} else addToFavorite(info, key, identifier);

						return {
							...item,
							isFav: !item.isFav,
						};
					}

					return item;
			  })
			: BASE_RESOURCE;

		SET_BASE_RESOURCE(items);
	}

	return { BASE_RESOURCE, toggleFavorite };
};
