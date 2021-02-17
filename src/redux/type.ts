import { GetResponseInterface } from 'models/common';

export const FETCH_RESOURCE = '@@internal/FETCH_RESOURCE';
export const FETCH_RESOURCE_FAILURE = '@@internal/FETCH_RESOURCE_FAILURE';
export const FETCH_RESOURCE_SUCCESS = '@@internal/FETCH_RESOURCE_SUCCESS';

export type FetchResponseInterface = {
	url: string;
};

interface FetchResource {
	type: typeof FETCH_RESOURCE;
	payload: FetchResponseInterface;
}

interface FetchResourceFailure {
	type: typeof FETCH_RESOURCE_FAILURE;
	payload: string;
}

interface FetchResourceSuccess {
	type: typeof FETCH_RESOURCE_SUCCESS;
	payload: GetResponseInterface;
}

export type FetchResourceActionType =
	| FetchResource
	| FetchResourceFailure
	| FetchResourceSuccess;
