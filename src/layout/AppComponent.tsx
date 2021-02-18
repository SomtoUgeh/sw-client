import * as React from 'react';
import { Navigation } from 'layout/navigation/Navigation';
import { ContentWrapper, ExtendedContainer } from './styles';
import { DetailsContextProvider } from 'contexts/DetailsContext';
import { FavoriteContextProvider } from 'contexts/FavoriteContext';

interface AppComponentInterface {
  children: React.ReactNode;
}

const AppComponent: React.FC<AppComponentInterface> = ({ children }) => {
  return (
    <div className={'App'}>
      <Navigation />

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
