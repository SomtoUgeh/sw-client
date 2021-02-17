import * as React from 'react';
import PeopleCard from './PeopleCard';
import { Loader } from 'components/Loader';
import { useSearch } from 'hooks/useSearch';
import { RootState } from 'store/rootReducers';
import { fetchResourceRequest } from 'redux/action';
import { CardWrapper } from 'components/cards/style';
import { useDispatch, useSelector } from 'react-redux';
import { useDetailsView } from 'contexts/DetailsContext';
import { PageHeaderComponent } from 'components/PageTitle';
import { useFavorite } from 'hooks/useFavorite';

const People: React.FC = () => {
	const dispatch = useDispatch();
	const {
		toggle: toggleModal,
		setSelectedResource,
		setType,
	} = useDetailsView();

	const { resource, status } = useSelector((state: RootState) => state.base);
	React.useEffect(() => {
		dispatch(fetchResourceRequest({ url: 'people/' }));
	}, [dispatch]);

	const { BASE_RESOURCE, toggleFavorite } = useFavorite(resource, 'people');
	const { searchTerm, setSearchTerm, results, setResults } = useSearch(
		BASE_RESOURCE,
	);

	React.useEffect(() => {
		setResults(BASE_RESOURCE);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [BASE_RESOURCE]);

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
	else return <div />;
};

export default People;
