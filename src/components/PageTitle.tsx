import styled from 'styled-components';
import { colors } from 'styles/colors';
import * as React from 'react';

interface PageHeaderComponentInterface {
	name: string;
	searchTerm: string;
	setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}
export const PageHeaderComponent: React.FC<PageHeaderComponentInterface> = ({
	name,
	searchTerm,
	setSearchTerm,
}) => {
	return (
		<PageTitleWrapper>
			<PageTitle>{name}</PageTitle>
			<FilterInput
				type="text"
				name="search"
				value={searchTerm}
				placeholder={`Filter ${name}`}
				onChange={({ target }) => setSearchTerm(target.value)}
			/>
		</PageTitleWrapper>
	);
};

export const PageTitleWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 2rem;

	@media (min-width: 1024px) {
		margin-bottom: 3rem;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}
`;

export const PageTitle = styled.h2`
	font-family: 'Roboto Mono', monospace;
	color: ${colors.white};
	margin-bottom: 1rem;
	text-transform: capitalize;

	@media (min-width: 1024px) {
		margin-bottom: 0;
	}
`;

export const FilterInput = styled.input`
	background: none;
	border: none;
	border-bottom: 2px solid ${colors.white};
	padding: 0.75rem 2rem;
	background-color: ${colors.black};
	font-size: 1.1rem;
	font-family: 'Roboto Mono', monospace;
	color: ${colors.white};
	border-top-left-radius: 8px;
	border-top-right-radius: 8px;

	@media (min-width: 1024px) {
		width: 360px;
		text-align: right;
		margin-bottom: 0;
	}
`;
