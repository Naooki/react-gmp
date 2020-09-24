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
  getMoviesSuccess,
  getMoviesFailure,
  getMovieByIdSuccess,
  getMovieByIdFailure,
  deleteMovieSuccess,
  deleteMovieFailure,
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

export default [
  moviesQueryParamsChangeEpic,
  getMoviesEpic,
  getMovieByIdEpic,
  deleteMovieEpic,
];
