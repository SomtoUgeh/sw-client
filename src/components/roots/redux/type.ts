export const FETCH_ROOT = '@@internal/FETCH_ROOT';
export const FETCH_ROOT_FAILURE = '@@internal/FETCH_ROOT_FAILURE';
export const FETCH_ROOT_SUCCESS = '@@internal/FETCH_ROOT_SUCCESS';

interface FetchRoot {
  type: typeof FETCH_ROOT;
}

interface FetchRootFailure {
  type: typeof FETCH_ROOT_FAILURE;
  payload: string;
}

interface FetchRootSuccess {
  type: typeof FETCH_ROOT_SUCCESS;
  payload: Record<string, unknown>;
}

export type FetchRootActionType =
  | FetchRoot
  | FetchRootFailure
  | FetchRootSuccess;
