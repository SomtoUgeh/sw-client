import * as React from 'react';
import AppComponent from 'layout/AppComponent';

interface AppPropsInterface {
  children: React.ReactNode;
}

const App: React.FC<AppPropsInterface> = ({ children }) => (
  <AppComponent>{children}</AppComponent>
);

export default App;
