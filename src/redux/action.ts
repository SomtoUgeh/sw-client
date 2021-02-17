import { GetResponseInterface } from 'models/common';
import {
	FETCH_RESOURCE,
	FETCH_RESOURCE_FAILURE,
	FETCH_RESOURCE_SUCCESS,
	FetchResourceActionType,
	FetchResponseInterface,
} from './type';

export const fetchResourceRequest = (
	payload: FetchResponseInterface,
): FetchResourceActionType => ({
	type: FETCH_RESOURCE,
	payload,
});

export const fetchResourceSuccess = (
	payload: GetResponseInterface,
): FetchResourceActionType => ({
	type: FETCH_RESOURCE_SUCCESS,
	payload,
});

export const fetchResourceFailed = (
	payload: string,
): FetchResourceActionType => ({
	type: FETCH_RESOURCE_FAILURE,
	payload,
});
