/**
 * Combine all reducers in this file and export the combined reducers.
 */
import { BrowserHistory, State } from 'history';
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import moviesReducer from 'containers/Movies/reducer';

export default function createReducer(history: BrowserHistory<State>) {
  const rootReducer = combineReducers({
    router: connectRouter(history),
    movies: moviesReducer,
  });

  return rootReducer;
}
