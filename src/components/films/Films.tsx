import * as React from 'react';
import FilmsCard from './FilmsCard';
import { Loader } from 'components/Loader';
import { useSearch } from 'hooks/useSearch';
import { RootState } from 'store/rootReducers';
import { fetchResourceRequest } from 'redux/action';
import { useDispatch, useSelector } from 'react-redux';
import { CardWrapper } from 'components/cards/style';
import { useDetailsView } from 'contexts/DetailsContext';
import { PageHeaderComponent, PageTitle } from 'components/PageTitle';
import { useFavorite } from 'hooks/useFavorite';

const Films: React.FC = () => {
  const dispatch = useDispatch();
  const {
    toggle: toggleModal,
    setSelectedResource,
    setType,
  } = useDetailsView();

  const { resource, status } = useSelector((state: RootState) => state.base);
  React.useEffect(() => {
    dispatch(fetchResourceRequest({ url: 'films/' }));
  }, [dispatch]);

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
