/**
 * Combine all reducers in this file and export the combined reducers.
 */
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import modalReducer from 'containers/Modal/reducer';
import moviesReducer from 'containers/Movies/reducer';

export default function createReducer(history: any) {
  const rootReducer = combineReducers({
    router: connectRouter(history),
    modal: modalReducer,
    movies: moviesReducer,
  });

  return rootReducer;
}
