import * as React from 'react';
import { useRoot } from 'hooks/useRoots';
import { Loader } from 'components/Loader';
import { useSearch } from 'hooks/useSearch';
import StarshipsCard from './StarshipsCard';
import { useFavorite } from 'hooks/useFavorite';
import { CardWrapper } from 'components/cards/style';
import { useDetailsView } from 'contexts/DetailsContext';
import { ResourceCompleteInterface } from 'redux/reducer';
import { PageHeaderComponent, PageTitle } from 'components/PageTitle';

const Starships: React.FC = () => {
  const [root] = useRoot({ url: 'starships' });
  const { resource, status } = root as ResourceCompleteInterface;
  const { BASE_RESOURCE, toggleFavorite } = useFavorite(resource, 'starship');
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
          {...{ searchTerm, setSearchTerm, name: 'starships' }}
        />

        <CardWrapper>
          {results.map((info, key) => (
            <StarshipsCard
              info={info}
              key={`${key}-starships`}
              handleToggleFav={() => toggleFavorite(info)}
              onClick={() => {
                setType('starship');
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

export default Starships;
