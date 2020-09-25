import { Epic, ofType } from 'redux-observable';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { switchMap, map, catchError, mapTo } from 'rxjs/operators';
import { stringify } from 'query-string';
import { push } from 'connected-react-router';

import { Movie } from 'entities/Movie';
import MoviesResponse from 'entities/MoviesResponse';
import BadRequestError from 'entities/BadRequestError';
import {
  getMovies,
  getMoviesSuccess,
  getMoviesFailure,
  getMovieByIdSuccess,
  getMovieByIdFailure,
  deleteMovieSuccess,
  deleteMovieFailure,
  updateMovieSuccess,
  updateMovieFailure,
} from './actions';
import ActionTypes from './constants';

const API_URL = 'http://localhost:4000';

const moviesQueryParamsChangeEpic: Epic = (action$, state$) =>
  action$.pipe(
    ofType(ActionTypes.MOVIES_SORT_CHANGE),
    map(action => {
      const params = { ...state$.value.router.location.query };

      // set new params, remove dropped
      Object.entries(action.payload).forEach(([key, value]) => {
        if (value) {
          params[key] = value;
        } else {
          delete params[key];
        }
      });

      return stringify(params);
    }),
    map(queryParams => push(queryParams ? `?${queryParams}` : '')),
  );

const getMoviesEpic: Epic = (action$, state$) =>
  action$.pipe(
    ofType(ActionTypes.GET_MOVIES),
    map(() => stringify(state$.value.router.location.query)),
    switchMap(queryParamStr =>
      ajax.getJSON<MoviesResponse>(`${API_URL}/movies?${queryParamStr}`).pipe(
        map(response => getMoviesSuccess(response.data)),
        catchError((err: BadRequestError) => of(getMoviesFailure(err))),
      ),
    ),
  );

const getMovieByIdEpic: Epic = action$ =>
  action$.pipe(
    ofType(ActionTypes.GET_MOVIE_BY_ID),
    map(action => action.payload.id),
    switchMap(id =>
      ajax.getJSON<Movie>(`${API_URL}/movies/${id}`).pipe(
        map(response => getMovieByIdSuccess(response)),
        catchError((err: BadRequestError) => of(getMovieByIdFailure(err))),
      ),
    ),
  );

const deleteMovieEpic: Epic = action$ =>
  action$.pipe(
    ofType(ActionTypes.DELETE_MOVIE),
    map(action => action.payload.id),
    switchMap(id =>
      ajax.delete(`${API_URL}/movies/${id}`).pipe(
        mapTo(deleteMovieSuccess()),
        catchError((err: BadRequestError) => of(deleteMovieFailure(err))),
      ),
    ),
  );

const updateMovieEpic: Epic = action$ =>
  action$.pipe(
    ofType(ActionTypes.UPDATE_MOVIE),
    map(action => action.payload),
    switchMap(body =>
      ajax({
        url: `${API_URL}/movies`,
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body,
      }).pipe(
        map(res => res.response),
        map(movie => updateMovieSuccess(movie)),
        catchError((err: BadRequestError) => of(updateMovieFailure(err))),
      ),
    ),
  );

const movieSuccessRequestActionTypes: ReadonlyArray<string> = [
  ActionTypes.DELETE_MOVIE_SUCCESS,
  ActionTypes.UPDATE_MOVIE_SUCCESS,
];
const refreshMoviesEpic: Epic = action$ =>
  action$.pipe(ofType(...movieSuccessRequestActionTypes), mapTo(getMovies()));

export default [
  moviesQueryParamsChangeEpic,
  getMoviesEpic,
  getMovieByIdEpic,
  deleteMovieEpic,
  updateMovieEpic,
  refreshMoviesEpic,
];
