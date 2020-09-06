import { Epic, ofType } from 'redux-observable';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { switchMap, map, catchError } from 'rxjs/operators';

import MoviesResponse from 'entities/MoviesResponse';
import BadRequestError from 'entities/BadRequestError';
import { getMoviesSuccess, getMoviesFailure } from './actions';
import ActionTypes from './constants';

const API_URL = 'http://localhost:4000';

const getMoviesEpic: Epic = action$ =>
  action$.pipe(
    ofType(ActionTypes.GET_MOVIES),
    switchMap(() =>
      ajax.getJSON<MoviesResponse>(`${API_URL}/movies`).pipe(
        map(response => getMoviesSuccess(response.data)),
        catchError((err: BadRequestError) => of(getMoviesFailure(err))),
      ),
    ),
  );

export { getMoviesEpic };
