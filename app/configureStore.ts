import { applyMiddleware, createStore, compose, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import createReducer from 'reducers';
import { ApplicationRootState } from 'types';

export default function configureStore(
  initialState: ApplicationRootState | Record<string, unknown> = {},
) {
  const middlewares = [];

  const enhancers = [applyMiddleware(...middlewares)];

  let enhancer;
  // If Redux Dev Tools and Saga Dev Tools Extensions are installed, enable them
  /* istanbul ignore next */
  if (process.env.NODE_ENV !== 'production' && typeof window === 'object') {
    enhancer = composeWithDevTools(...enhancers);
  } else {
    enhancer = compose(...enhancers);
  }

  const store = createStore(createReducer(), initialState, enhancer) as Store;

  return store;
}
