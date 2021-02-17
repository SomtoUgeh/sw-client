import * as React from 'react';
import VehiclesCard from './VehiclesCard';
import { Loader } from 'components/Loader';
import { useSearch } from 'hooks/useSearch';
import { RootState } from 'store/rootReducers';
import { fetchResourceRequest } from 'redux/action';
import { CardWrapper } from 'components/cards/style';
import { useDispatch, useSelector } from 'react-redux';
import { useDetailsView } from 'contexts/DetailsContext';
import { PageHeaderComponent, PageTitle } from 'components/PageTitle';
import { useFavorite } from 'hooks/useFavorite';

const Vehicles: React.FC = () => {
	const dispatch = useDispatch();
	const {
		toggle: toggleModal,
		setSelectedResource,
		setType,
	} = useDetailsView();

	const { resource, status } = useSelector((state: RootState) => state.base);
	React.useEffect(() => {
		dispatch(fetchResourceRequest({ url: 'vehicles/' }));
	}, [dispatch]);

	const { BASE_RESOURCE, toggleFavorite } = useFavorite(resource, 'vehicle');
	const { searchTerm, setSearchTerm, results } = useSearch(BASE_RESOURCE);

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
