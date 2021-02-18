import {
  FETCH_ROOT,
  FETCH_ROOT_FAILURE,
  FETCH_ROOT_SUCCESS,
  FetchRootActionType,
} from './type';

export const fetchRootRequest = (): FetchRootActionType => ({
  type: FETCH_ROOT,
});

export const fetchRootSuccess = (
  payload: Record<string, unknown>,
): FetchRootActionType => ({
  type: FETCH_ROOT_SUCCESS,
  payload,
});

export const fetchRootFailed = (payload: string): FetchRootActionType => ({
  type: FETCH_ROOT_FAILURE,
  payload,
});
