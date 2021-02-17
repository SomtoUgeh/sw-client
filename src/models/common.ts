export type ResourceState = 'IDLE' | 'LOADING' | 'SUCCESS' | 'FAILURE';

export interface GetResponseInterface {
	count: number;
	results: Record<string, unknown>[];
	[x: string]: unknown;
}
