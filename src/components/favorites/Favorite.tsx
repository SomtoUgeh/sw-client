import * as React from 'react';
import { useFavorite } from 'contexts/FavoriteContext';
import {
  CardWrapper,
  SubHeading,
  SubInformation,
} from 'components/cards/style';
import Card from 'components/cards/Card';
import { PageTitle } from 'components/PageTitle';
import { composeResource } from 'utils/composeResourceDetails';

/**
 * Get all favs from localStorage, loop over and render information about each resource
 * Functionality to also remove a resource from fav
 */
const Favorite = () => {
  const { favoriteResources, removeFromFavorite } = useFavorite();

  if (favoriteResources.length < 1)
    return <PageTitle>No resource here</PageTitle>;

  return (
    <CardWrapper>
      {favoriteResources.map(info => {
        const key = info?.favKey as string;
        const identifier = key === 'film' ? 'title' : 'name';
        const uniqueAttr = info?.[identifier] as string;

        const composedResource = composeResource(info, key);

        return (
          <Card
            key={uniqueAttr}
            isFav={Boolean(info?.isFav)}
            handleToggleFav={() =>
              removeFromFavorite(uniqueAttr, key, identifier)
            }
          >
            <div className="tag">
              <p>{info.favKey as string}</p>
            </div>

            <div className="name">
              <h4>{(info?.name as string) ?? (info?.title as string)}</h4>
            </div>

            <div className="other-info">
              <div>
                <SubHeading>info 1</SubHeading>
                <SubInformation>
                  {composedResource?.one as string}
                </SubInformation>
              </div>

              <div>
                <SubHeading>info 2</SubHeading>
                <SubInformation>
                  {composedResource?.three as string}
                </SubInformation>
              </div>
            </div>
          </Card>
        );
      })}
    </CardWrapper>
  );
};

export default Favorite;
