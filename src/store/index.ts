import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './rootReducers';
import rootSaga from './rootSaga';
import { applyMiddleware, compose, createStore } from 'redux';

// React Sagas
const sagaMiddleware = createSagaMiddleware();

// devtools
// @ts-ignore
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
	rootReducer,
	composeEnhancer(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);
