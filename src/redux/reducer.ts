import {
  FETCH_RESOURCE,
  FETCH_RESOURCE_FAILURE,
  FETCH_RESOURCE_SUCCESS,
  FetchResourceActionType,
} from './type';
import { GetResponseInterface, ResourceState } from 'models/common';

export interface ResourceCompleteInterface {
  resource: GetResponseInterface;
  error: string;
  status: ResourceState;
}

export const INITIAL_STATE: ResourceCompleteInterface = {
  resource: {
    count: 0,
    results: [],
  },
  status: 'IDLE',
  error: '',
};

const baseReducer = (
  state = INITIAL_STATE,
  action: FetchResourceActionType,
): ResourceCompleteInterface => {
  switch (action.type) {
    case FETCH_RESOURCE:
      return {
        ...state,
        error: '',
        status: 'LOADING',
      };
    case FETCH_RESOURCE_SUCCESS:
      return {
        ...state,
        status: 'SUCCESS',
        resource: action.payload,
        error: '',
      };
    case FETCH_RESOURCE_FAILURE:
      return {
        ...state,
        status: 'FAILURE',
        error: action.payload,
        resource: {
          count: 0,
          results: [],
        },
      };
    default:
      return state;
  }
};

export default baseReducer;
