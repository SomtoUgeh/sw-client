import * as React from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import NavItem from 'layout/navigation/NavItem';
import { RootState } from 'store/rootReducers';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRootRequest } from 'components/roots/redux/action';
// @ts-ignore
import { ReactComponent as Logo } from 'assets/logo.svg';
// @ts-ignore
import { ReactComponent as Burger } from 'assets/burger.svg';
// @ts-ignore
import { ReactComponent as Close } from 'assets/close.svg';
import {
	HeaderContainer,
	LogoWrapper,
	NavigationContainer,
} from 'layout/styles';

export const Navigation: React.FC = () => {
	const dispatch = useDispatch();
	const [openMenu, setOpenMenu] = React.useState(false);

	const { roots } = useSelector((state: RootState) => state.roots);
	const keys = Object.keys(roots || {});

	React.useEffect(() => {
		dispatch(fetchRootRequest());
	}, [dispatch]);

	return (
		<HeaderContainer className={cx(openMenu && 'isOpen')}>
			<header>
				<LogoWrapper>
					<Link to="/">
						<Logo />
					</Link>

					<button type="button" onClick={_ => setOpenMenu(!openMenu)}>
						{openMenu ? <Close /> : <Burger />}
					</button>
				</LogoWrapper>
			</header>

			<div className={cx(openMenu && 'isOpen', 'nav-wrapper')}>
				{roots && (
					<nav>
						<NavigationContainer>
							{[...keys, 'favorite'].map(key => (
								<NavItem
									key={key}
									name={key}
									onClick={() => setOpenMenu(false)}
								/>
							))}
						</NavigationContainer>
					</nav>
				)}
			</div>
		</HeaderContainer>
	);
};
