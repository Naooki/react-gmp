/**
 * Combine all reducers in this file and export the combined reducers.
 */
import { combineReducers } from 'redux';

import moviesReducer from 'containers/Movies/reducer';

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    ...injectedReducers,
    movies: moviesReducer,
  });

  return rootReducer;
}
