import * as React from 'react';
import { NavLink } from 'react-router-dom';
// @ts-ignore
import { ReactComponent as Star } from 'assets/star.svg';

interface NavItemInterface {
	name: string;
}

const NavItem: React.FC<NavItemInterface> = props => {
	return (
		<li>
			<NavLink activeClassName="active" to={`/${props?.name}`}>
				{props.name === 'favorite' ? (
					<>
						<span>
							<Star />
						</span>{' '}
					</>
				) : null}
				{props.name}
			</NavLink>
		</li>
	);
};

export default NavItem;