import * as React from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import NavItem from 'layout/navigation/NavItem';
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
import { RootsCompleteInterface } from 'components/roots/redux/reducer';

interface NavigationInterface {
  roots: RootsCompleteInterface['roots'];
}

export const Navigation: React.FC<NavigationInterface> = ({ roots }) => {
  const keys = Object.keys(roots || {});
  const [openMenu, setOpenMenu] = React.useState(false);

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
