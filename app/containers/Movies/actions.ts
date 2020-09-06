import { action } from 'typesafe-actions';

import { Movie } from 'entities/Movie';
import BadRequestError from 'entities/BadRequestError';
import ActionTypes from './constants';

export const getMovies = (searchString: string) =>
  action(ActionTypes.GET_MOVIES, { searchString });

export const getMoviesSuccess = (movies: Movie[]) =>
  action(ActionTypes.GET_MOVIES_SUCCESS, { movies });

export const getMoviesFailure = (error: BadRequestError) =>
  action(ActionTypes.GET_MOVIES_FAILURE, error);
