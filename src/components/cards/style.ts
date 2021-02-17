import styled from 'styled-components';
import { colors } from 'styles/colors';

export const CardWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
	grid-gap: 2rem;
	grid-auto-rows: 1fr;
`;

export const CardItem = styled.div`
	position: relative;
	display: block;

	svg {
		position: absolute;
		right: 1rem;
		top: 1rem;
		cursor: pointer;
	}

	div.block {
		min-height: 170px;
		background-color: #c4c4c4;
		cursor: pointer;
	}

	div.information {
		background-color: ${colors.white};
		padding: 1rem;
		height: 180px;
	}

	div.tag {
		p {
			font-style: normal;
			font-weight: 500;
			font-size: 10px;
			line-height: 16px;
			text-transform: uppercase;
			color: #000000;
			border: 2px solid #000000;
			width: 12ch;
			text-align: center;
		}
	}

	div.name {
		font-style: normal;
		font-weight: 600;
		font-size: 18px;
		line-height: 30px;
		letter-spacing: -0.04em;
		text-transform: uppercase;
		color: ${colors.black};

		padding-bottom: 1.25rem;
	}

	div.other-info {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}
`;

export const SubHeading = styled.p`
	font-style: normal;
	font-weight: 500;
	font-size: 8px;
	line-height: 12px;
	letter-spacing: -0.04em;
	color: #898989;
	text-transform: uppercase;
	margin-bottom: 0;
`;

export const SubInformation = styled.h5`
	font-style: normal;
	font-weight: 500;
	font-size: 14px;
	line-height: 24px;
	letter-spacing: -0.04em;
	color: #424242;
	text-transform: capitalize;
`;
