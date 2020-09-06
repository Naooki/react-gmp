import { applyMiddleware, createStore, compose, Store } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router';

import history from 'utils/history';
import createEpic from 'epics';
import createReducer from 'reducers';
import { ApplicationRootState } from 'types';

export default function configureStore(
  initialState: ApplicationRootState | Record<string, unknown> = {},
) {
  const epicMiddleware = createEpicMiddleware();
  const connectedRouterMiddleware = routerMiddleware(history);
  const middlewares = [connectedRouterMiddleware, epicMiddleware];

  const enhancers = [applyMiddleware(...middlewares)];

  let enhancer;
  // If Redux Dev Tools and Saga Dev Tools Extensions are installed, enable them
  /* istanbul ignore next */
  if (process.env.NODE_ENV !== 'production' && typeof window === 'object') {
    enhancer = composeWithDevTools(...enhancers);
  } else {
    enhancer = compose(...enhancers);
  }

  const store = createStore(
    createReducer(history),
    initialState,
    enhancer,
  ) as Store;
  epicMiddleware.run(createEpic());

  return store;
}
