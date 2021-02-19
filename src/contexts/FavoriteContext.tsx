/* eslint-disable @typescript-eslint/ban-types */
import * as React from 'react';
import { useLocalStorage } from 'hooks/useLocalStorage';

export type StorageType = Record<string, unknown>[];
interface FavoriteContextInterface {
  favoriteResources: Record<string, unknown>[];
  addToFavorite: (
    item: Record<string, unknown>,
    key: string,
    identifier?: 'name' | 'title',
  ) => void;
  removeFromFavorite: (
    unique: string,
    key: string,
    identifier?: 'name' | 'title',
  ) => void;
}

const FavoriteContext = React.createContext({} as FavoriteContextInterface);
FavoriteContext.displayName = 'FavoriteContext';

function FavoriteContextProvider(props: React.PropsWithChildren<{}>) {
  const { Provider } = FavoriteContext;
  const {
    storedValue: storedFavorites,
    setValue: setStoredFavorites,
  } = useLocalStorage<StorageType>('sw-fav', []);

  /**
   * Build a transformed base resources containing isFav and favKey for favorites
   */

  const [favoriteResources, setFavoriteResources] = React.useState<
    Record<string, unknown>[]
  >(() => storedFavorites);

  function addToFavorite(
    item: Record<string, unknown>,
    key: string,
    identifier: 'name' | 'title' = 'name',
  ) {
    const check = favoriteResources
      .filter(item => item.favKey === key)
      .find(rec => rec[identifier] === item[identifier]);

    if (check && Object.keys(check).length > 0) return;

    const updatedItem = {
      ...item,
      favKey: key,
      isFav: true,
    };

    setFavoriteResources(values => [...values, updatedItem]);
  }

  function removeFromFavorite(
    unique: string,
    key: string,
    identifier: 'name' | 'title' = 'name',
  ) {
    const updatedItem = favoriteResources.filter(
      rec => rec[identifier] !== unique,
    );

    setFavoriteResources(updatedItem);
  }

  React.useEffect(() => {
    if (favoriteResources) setStoredFavorites(favoriteResources);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [favoriteResources]);

  return (
    <Provider
      value={{
        favoriteResources,
        addToFavorite,
        removeFromFavorite,
      }}
    >
      {props.children}
    </Provider>
  );
}

/**
 * Handles functionality around favorite resources
 * @returns - {favoriteResources, addToFavorite, removeFromFavorite}
 */
function useFavorite(): FavoriteContextInterface {
  const context = React.useContext(FavoriteContext);

  if (context === undefined) {
    throw new Error('useFavorite must be used within a FavoriteContext');
  }

  return context;
}

export { FavoriteContextProvider, useFavorite };
