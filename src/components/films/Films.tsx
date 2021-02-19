import * as React from 'react';
import FilmsCard from './FilmsCard';
import { useRoot } from 'hooks/useRoots';
import { Loader } from 'components/Loader';
import { useSearch } from 'hooks/useSearch';
import { useFavorite } from 'hooks/useFavorite';
import { CardWrapper } from 'components/cards/style';
import { useDetailsView } from 'contexts/DetailsContext';
import { ResourceCompleteInterface } from 'redux/reducer';
import { PageHeaderComponent, PageTitle } from 'components/PageTitle';

const Films: React.FC = () => {
  const [root] = useRoot({ url: 'films' });
  const { resource, status } = root as ResourceCompleteInterface;

  const {
    toggle: toggleModal,
    setSelectedResource,
    setType,
  } = useDetailsView();

  const { BASE_RESOURCE, toggleFavorite } = useFavorite(
    resource,
    'film',
    'title',
  );

  const { searchTerm, setSearchTerm, results } = useSearch(
    BASE_RESOURCE,
    'title',
  );

  if (['IDLE', 'LOADING'].includes(status)) return <Loader />;
  if (status === 'SUCCESS' && resource.results.length > 0)
    return (
      <>
        <PageHeaderComponent
          {...{ searchTerm, setSearchTerm, name: 'films' }}
        />

        <CardWrapper>
          {results.map((info, key) => (
            <FilmsCard
              info={info}
              key={`${key}-films`}
              handleToggleFav={() => toggleFavorite(info)}
              onClick={() => {
                setType('film');
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

export default Films;
