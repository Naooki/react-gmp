import { action } from 'typesafe-actions';

import { Movie } from 'entities/Movie';
import BadRequestError from 'entities/BadRequestError';
import { SortType } from 'components/SortBy';
import ActionTypes from './constants';

export const getMovies = (
  searchBy: 'title' | 'genres',
  search: string,
  sortBy: 'release_date',
  sortOrder: SortType | null,
) => {
  const payload: { [key: string]: string } = {};
  if (search) {
    payload.searchBy = searchBy;
    payload.search = search;
  }
  if (sortOrder) {
    payload.sortBy = sortBy;
    payload.sortOrder = sortOrder;
  }
  return action(ActionTypes.GET_MOVIES, payload);
};

export const getMoviesSuccess = (movies: Movie[]) =>
  action(ActionTypes.GET_MOVIES_SUCCESS, { movies });

export const getMoviesFailure = (error: BadRequestError) =>
  action(ActionTypes.GET_MOVIES_FAILURE, error);
