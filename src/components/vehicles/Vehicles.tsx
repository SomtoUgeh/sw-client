import * as React from 'react';
import { useRoot } from 'hooks/useRoots';
import VehiclesCard from './VehiclesCard';
import { Loader } from 'components/Loader';
import { useSearch } from 'hooks/useSearch';
import { useFavorite } from 'hooks/useFavorite';
import { CardWrapper } from 'components/cards/style';
import { useDetailsView } from 'contexts/DetailsContext';
import { ResourceCompleteInterface } from 'redux/reducer';
import { PageHeaderComponent, PageTitle } from 'components/PageTitle';

const Vehicles: React.FC = () => {
  const [root] = useRoot({ url: 'vehicles' });
  const { resource, status } = root as ResourceCompleteInterface;
  const { BASE_RESOURCE, toggleFavorite } = useFavorite(resource, 'vehicle');
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
          {...{ searchTerm, setSearchTerm, name: 'vehicles' }}
        />

        <CardWrapper>
          {results.map((info, key) => (
            <VehiclesCard
              info={info}
              key={`${key}-vehicles`}
              handleToggleFav={() => toggleFavorite(info)}
              onClick={() => {
                setType('vehicle');
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

export default Vehicles;
