import * as React from 'react';
import PlanetCard from './PlanetCard';
import { Loader } from 'components/Loader';
import { useSearch } from 'hooks/useSearch';
import { RootState } from 'store/rootReducers';
import { fetchResourceRequest } from 'redux/action';
import { useDispatch, useSelector } from 'react-redux';
import { CardWrapper } from 'components/cards/style';
import { PageHeaderComponent, PageTitle } from 'components/PageTitle';
import { useDetailsView } from 'contexts/DetailsContext';
import { useFavorite } from 'hooks/useFavorite';

const Planets: React.FC = () => {
	const dispatch = useDispatch();
	const {
		toggle: toggleModal,
		setSelectedResource,
		setType,
	} = useDetailsView();

	const { resource, status } = useSelector((state: RootState) => state.base);
	React.useEffect(() => {
		dispatch(fetchResourceRequest({ url: 'planets/' }));
	}, [dispatch]);

	const { BASE_RESOURCE, toggleFavorite } = useFavorite(resource, 'planet');
	const { searchTerm, setSearchTerm, results } = useSearch(BASE_RESOURCE);

	if (['IDLE', 'LOADING'].includes(status)) return <Loader />;
	if (status === 'SUCCESS' && resource.results.length > 0)
		return (
			<>
				<PageHeaderComponent
					{...{ searchTerm, setSearchTerm, name: 'planets' }}
				/>

				<CardWrapper>
					{results.map((info, key) => (
						<PlanetCard
							info={info}
							key={`${key}-planets`}
							handleToggleFav={() => toggleFavorite(info)}
							onClick={() => {
								setType('planet');
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

export default Planets;
