import * as React from 'react';
import StarshipsCard from './StarshipsCard';
import { Loader } from 'components/Loader';
import { useSearch } from 'hooks/useSearch';
import { RootState } from 'store/rootReducers';
import { fetchResourceRequest } from 'redux/action';
import { useDispatch, useSelector } from 'react-redux';
import { CardWrapper } from 'components/cards/style';
import { PageHeaderComponent, PageTitle } from 'components/PageTitle';
import { useDetailsView } from 'contexts/DetailsContext';
import { useFavorite } from 'hooks/useFavorite';

const Starships: React.FC = () => {
	const dispatch = useDispatch();
	const {
		toggle: toggleModal,
		setSelectedResource,
		setType,
	} = useDetailsView();

	const { resource, status } = useSelector((state: RootState) => state.base);
	React.useEffect(() => {
		dispatch(fetchResourceRequest({ url: 'starships/' }));
	}, [dispatch]);

	const { BASE_RESOURCE, toggleFavorite } = useFavorite(resource, 'starship');
	const { searchTerm, setSearchTerm, results } = useSearch(BASE_RESOURCE);

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
