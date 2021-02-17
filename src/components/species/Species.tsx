import * as React from 'react';
import SpeciesCard from './SpeciesCard';
import { Loader } from 'components/Loader';
import { useSearch } from 'hooks/useSearch';
import { RootState } from 'store/rootReducers';
import { fetchResourceRequest } from 'redux/action';
import { useDispatch, useSelector } from 'react-redux';
import { CardWrapper } from 'components/cards/style';
import { PageHeaderComponent } from 'components/PageTitle';
import { useDetailsView } from 'contexts/DetailsContext';
import { useFavorite } from 'hooks/useFavorite';

const Species: React.FC = () => {
	const dispatch = useDispatch();
	const {
		toggle: toggleModal,
		setSelectedResource,
		setType,
	} = useDetailsView();

	const { resource, status } = useSelector((state: RootState) => state.base);
	React.useEffect(() => {
		dispatch(fetchResourceRequest({ url: 'species/' }));
	}, [dispatch]);

	const { BASE_RESOURCE, toggleFavorite } = useFavorite(resource, 'people');
	const { searchTerm, setSearchTerm, results } = useSearch(BASE_RESOURCE);

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
	else return <div />;
};

export default Species;
