import base from '../redux/reducer';
import { combineReducers } from 'redux';
import roots from '../components/roots/redux/reducer';

export const rootReducer = combineReducers({
	roots,
	base,
});

export type RootState = ReturnType<typeof rootReducer>;
