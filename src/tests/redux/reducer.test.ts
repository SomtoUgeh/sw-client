import * as baseTypes from 'redux/type';
import baseReducer, {
  INITIAL_STATE,
  ResourceCompleteInterface,
} from 'redux/reducer';

const mockedResponse = {
  count: 10,
  results: [{ people: '', vehicles: '', starships: '', planets: '' }],
};

const MOCKED_LOADING: ResourceCompleteInterface = {
  status: 'LOADING',
  resource: {
    count: 0,
    results: [],
  },
  error: '',
};

const MOCKED_SUCCESS: ResourceCompleteInterface = {
  status: 'SUCCESS',
  error: '',
  resource: mockedResponse,
};

const MOCKED_FAILURE: ResourceCompleteInterface = {
  status: 'FAILURE',
  error: 'Wrong information passed',
  resource: {
    count: 0,
    results: [],
  },
};

describe('base reducer', () => {
  it('should return the loading state', () => {
    expect(
      baseReducer(INITIAL_STATE, {
        type: baseTypes.FETCH_RESOURCE,
        payload: {
          url: '',
        },
      }),
    ).toEqual(MOCKED_LOADING);
  });

  it('should handle success', () => {
    expect(
      baseReducer(MOCKED_LOADING, {
        type: baseTypes.FETCH_RESOURCE_SUCCESS,
        payload: mockedResponse,
      }),
    ).toEqual(MOCKED_SUCCESS);
  });

  it('should handle error', () => {
    expect(
      baseReducer(MOCKED_LOADING, {
        type: baseTypes.FETCH_RESOURCE_FAILURE,
        payload: 'Wrong information passed',
      }),
    ).toEqual(MOCKED_FAILURE);
  });
});
