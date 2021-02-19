import { Provider } from 'react-redux';
import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import createSagaMiddleware from 'redux-saga';
import { rootReducer, RootState } from 'store/rootReducers';
import { createStore, compose, applyMiddleware, Store } from 'redux';
import { RenderOptions, render as rtlRender } from '@testing-library/react';

const sagaMiddleware = createSagaMiddleware();

const render = (
  ui: React.ReactElement,
  {
    initialState,
    store = createStore(
      rootReducer,
      initialState,
      compose(applyMiddleware(sagaMiddleware)),
    ),
    ...renderOptions
  }: {
    initialState: RootState;
    store: Store<RootState>;
    renderOptions: RenderOptions;
  },
) => {
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
