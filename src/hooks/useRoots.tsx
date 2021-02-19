import { useEffect } from 'react';
import { RootState } from 'store/rootReducers';
import { fetchResourceRequest } from 'redux/action';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRootRequest } from 'components/roots/redux/action';

export const useRoot = ({ url = '' } = {}) => {
  const dispatch = useDispatch();
  const root = useSelector(
    (state: RootState) => state?.[url ? 'base' : 'roots'],
  );

  useEffect(() => {
    if (url) dispatch(fetchResourceRequest({ url: `${url}/` }));
    else dispatch(fetchRootRequest());
  }, [dispatch, url]);

  return [root];
};
