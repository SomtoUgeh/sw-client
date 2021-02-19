import * as React from 'react';
import { useRoot } from 'hooks/useRoots';
import { Loader } from 'components/Loader';
import { PageTitle } from 'components/PageTitle';
import { Navigation } from 'layout/navigation/Navigation';
import { ContentWrapper, ExtendedContainer } from './styles';
import { DetailsContextProvider } from 'contexts/DetailsContext';
import { FavoriteContextProvider } from 'contexts/FavoriteContext';
import { RootsCompleteInterface } from 'components/roots/redux/reducer';

interface AppComponentInterface {
  children: React.ReactNode;
}

const AppComponent: React.FC<AppComponentInterface> = ({ children }) => {
  const [root] = useRoot();
  const { roots, status } = root as RootsCompleteInterface;

  if (['IDLE', 'LOADING'].includes(status)) return <Loader />;
  if (status === 'FAILURE') return <PageTitle>No resource here</PageTitle>;

  return (
    <div className={'App'}>
      <Navigation roots={roots} />

      <ContentWrapper>
        <DetailsContextProvider>
          <FavoriteContextProvider>
            <ExtendedContainer>{children}</ExtendedContainer>
          </FavoriteContextProvider>
        </DetailsContextProvider>
      </ContentWrapper>
    </div>
  );
};

export default AppComponent;
