import { ResourceState } from 'models/common';
import {
  FETCH_ROOT,
  FETCH_ROOT_FAILURE,
  FETCH_ROOT_SUCCESS,
  FetchRootActionType,
} from './type';

interface RootsCompleteInterface {
  roots: Record<string, unknown>;
  error: string;
  state: ResourceState;
}

const INITIAL_STATE: RootsCompleteInterface = {
  roots: {},
  state: 'IDLE',
  error: '',
};

const rootReducer = (
  state = INITIAL_STATE,
  action: FetchRootActionType,
): RootsCompleteInterface => {
  switch (action.type) {
    case FETCH_ROOT:
      return {
        ...state,
        state: 'LOADING',
      };
    case FETCH_ROOT_SUCCESS:
      return {
        ...state,
        state: 'SUCCESS',
        roots: action.payload,
      };
    case FETCH_ROOT_FAILURE:
      return {
        ...state,
        state: 'FAILURE',
        error: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
