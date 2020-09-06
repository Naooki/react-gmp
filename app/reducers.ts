/**
 * Combine all reducers in this file and export the combined reducers.
 */
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import moviesReducer from 'containers/Movies/reducer';

export default function createReducer(history: any) {
  const rootReducer = combineReducers({
    router: connectRouter(history),
    movies: moviesReducer,
  });

  return rootReducer;
}
