import * as React from 'react';
import SpeciesCard from './SpeciesCard';
import { useRoot } from 'hooks/useRoots';
import { Loader } from 'components/Loader';
import { useSearch } from 'hooks/useSearch';
import { useFavorite } from 'hooks/useFavorite';
import { CardWrapper } from 'components/cards/style';
import { useDetailsView } from 'contexts/DetailsContext';
import { ResourceCompleteInterface } from 'redux/reducer';
import { PageHeaderComponent, PageTitle } from 'components/PageTitle';

const Species: React.FC = () => {
  const [root] = useRoot({ url: 'species' });
  const { resource, status } = root as ResourceCompleteInterface;
  const { BASE_RESOURCE, toggleFavorite } = useFavorite(resource, 'species');
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
          {...{ searchTerm, setSearchTerm, name: 'species' }}
        />

        <CardWrapper>
          {results.map((info, key) => (
            <SpeciesCard
              info={info}
              key={`${key}-species`}
              handleToggleFav={() => toggleFavorite(info)}
              onClick={() => {
                setType('species');
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

export default Species;
