import React from 'react';
import merge from 'lodash.merge';
import keyBy from 'lodash.keyby';
import { BaseInterface } from './useSearch';
import { useLocalStorage } from './useLocalStorage';
import { GetResponseInterface } from 'models/common';
import { useFavorite as useFavoriteContext } from 'contexts/FavoriteContext';

type StorageType = Record<string, unknown>[];

/**
 *
 * @param resource - Resource fetched from redux store {status, results}
 * @param key - Name/type of resources handled e.g 'people', 'planet'
 * @param identifier - unique identifier for resource type. Default is 'name'
 */
export const useFavorite = (
  resource: GetResponseInterface,
  key: string,
  identifier: 'name' | 'title' = 'name',
) => {
  const { addToFavorite, removeFromFavorite } = useFavoriteContext();

  // reach out to the localStorage and fetch resource with key 'sw-fav'
  const { storedValue: storedFavorites } = useLocalStorage<StorageType>(
    'sw-fav',
    [],
  );

  const [BASE_RESOURCE, SET_BASE_RESOURCE] = React.useState<BaseInterface[]>(
    resource.results,
  );

  React.useEffect(() => {
    if (resource.results) {
      // get all favs items that match the specify key provided, e.g fav items 'people' resource
      const filteredFavs = storedFavorites?.filter(item => item.favKey === key);

      // create a transformed base for resource containing important keys for fav functionality
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

  /**
   *
   * @param info - takes in a unit resource and checks to add or remove from the fav list.
   * Works with a unique identifier like name, title of a resource and well as the resource type.
   *
   */
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
