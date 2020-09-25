import { Epic, ofType } from 'redux-observable';
import { mapTo } from 'rxjs/operators';

import MoviesActionTypes from 'containers/Movies/constants';
import { closeModal, toggleLoading } from './actions';

const toggleLoadingActionTypes: ReadonlyArray<string> = [
  MoviesActionTypes.DELETE_MOVIE,
  MoviesActionTypes.UPDATE_MOVIE,
];
const toggleLoadingEpic: Epic = action$ =>
  action$.pipe(ofType(...toggleLoadingActionTypes), mapTo(toggleLoading(true)));

const toggleLoadedActionTypes: ReadonlyArray<string> = [
  MoviesActionTypes.DELETE_MOVIE_FAILURE,
  MoviesActionTypes.UPDATE_MOVIE_FAILURE,
];
const toggleLoadedEpic: Epic = action$ =>
  action$.pipe(ofType(...toggleLoadedActionTypes), mapTo(toggleLoading(false)));

const closeModalActionTypes: ReadonlyArray<string> = [
  MoviesActionTypes.DELETE_MOVIE_SUCCESS,
  MoviesActionTypes.UPDATE_MOVIE_SUCCESS,
];

const closeModalEpic: Epic = action$ =>
  action$.pipe(ofType(...closeModalActionTypes), mapTo(closeModal()));

export default [toggleLoadingEpic, toggleLoadedEpic, closeModalEpic];
