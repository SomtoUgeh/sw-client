import { Provider } from 'react-redux';
import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { store } from 'store';
import { RenderOptions, render as rtlRender } from '@testing-library/react';

const render = (ui: React.ReactElement, renderOptions?: RenderOptions) => {
  const history = createMemoryHistory();

  const Wrapper: React.FC = ({ children }) => (
    <Provider store={store}>
      <Router history={history}>{children}</Router>
    </Provider>
  );

  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

// re-export everything
export * from '@testing-library/react';

// override render method
export { render };
