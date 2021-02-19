import * as React from 'react';
import PeopleCard from './PeopleCard';
import { useRoot } from 'hooks/useRoots';
import { Loader } from 'components/Loader';
import { useSearch } from 'hooks/useSearch';
import { useFavorite } from 'hooks/useFavorite';
import { CardWrapper } from 'components/cards/style';
import { useDetailsView } from 'contexts/DetailsContext';
import { ResourceCompleteInterface } from 'redux/reducer';
import { PageHeaderComponent, PageTitle } from 'components/PageTitle';

const People: React.FC = () => {
  const [root] = useRoot({ url: 'people' });
  const { resource, status } = root as ResourceCompleteInterface;
  const { BASE_RESOURCE, toggleFavorite } = useFavorite(resource, 'people');
  const { searchTerm, setSearchTerm, results } = useSearch(BASE_RESOURCE);

  const {
    toggle: toggleModal,
    setSelectedResource,
    setType,
  } = useDetailsView();

  if (['IDLE', 'LOADING'].includes(status)) return <Loader />;
  if (status === 'SUCCESS' && resource.results.length > 0)
    return (
      <>
        <PageHeaderComponent
          {...{ searchTerm, setSearchTerm, name: 'people' }}
        />

        <CardWrapper>
          {results.map((info, key) => (
            <PeopleCard
              info={info}
              key={`${key}-people`}
              handleToggleFav={() => toggleFavorite(info)}
              onClick={() => {
                setType('people');
                setSelectedResource(info);
                toggleModal();
              }}
            />
          ))}
        </CardWrapper>
      </>
    );
  else return <PageTitle>No resource here</PageTitle>;
};

export default People;
