import { Epic, ofType } from 'redux-observable';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { switchMap, map, catchError } from 'rxjs/operators';
import { stringify } from 'query-string';

import { Movie } from 'entities/Movie';
import MoviesResponse from 'entities/MoviesResponse';
import BadRequestError from 'entities/BadRequestError';
import {
  getMoviesSuccess,
  getMoviesFailure,
  getMovieByIdSuccess,
  getMovieByIdFailure,
} from './actions';
import ActionTypes from './constants';

const API_URL = 'http://localhost:4000';

const getMoviesEpic: Epic = action$ =>
  action$.pipe(
    ofType(ActionTypes.GET_MOVIES),
    map(action => stringify(action.payload)),
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

export { getMoviesEpic, getMovieByIdEpic };
