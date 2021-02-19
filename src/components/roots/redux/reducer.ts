import { ResourceState } from 'models/common';
import {
  FETCH_ROOT,
  FETCH_ROOT_FAILURE,
  FETCH_ROOT_SUCCESS,
  FetchRootActionType,
} from './type';

export interface RootsCompleteInterface {
  roots: Record<string, unknown>;
  error: string;
  status: ResourceState;
}

const INITIAL_STATE: RootsCompleteInterface = {
  roots: {},
  status: 'IDLE',
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
        status: 'LOADING',
      };
    case FETCH_ROOT_SUCCESS:
      return {
        ...state,
        status: 'SUCCESS',
        roots: action.payload,
      };
    case FETCH_ROOT_FAILURE:
      return {
        ...state,
        status: 'FAILURE',
        error: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
