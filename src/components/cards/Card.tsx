import * as React from 'react';
import { CardItem } from './style';
// @ts-ignore
import { ReactComponent as Star } from 'assets/isFav.svg';

interface CardPropsInterface {
	isFav?: boolean;
	onClick?: () => void;
	children: React.ReactNode;
	handleToggleFav?: () => void;
}

/**
 *
 * Card component wrapper for all resources
 */
const Card: React.FC<CardPropsInterface> = props => {
	return (
		<CardItem>
			<div className="block" onClick={props.onClick} />
			<div className="information">{props.children}</div>
			<Star
				onClick={props.handleToggleFav}
				fill={props.isFav ? 'white' : 'none'}
			/>
		</CardItem>
	);
};

export default Card;
