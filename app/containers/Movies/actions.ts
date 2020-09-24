import { action } from 'typesafe-actions';

import { Movie } from 'entities/Movie';
import BadRequestError from 'entities/BadRequestError';
import { SortType } from 'components/SortBy';
import ActionTypes from './constants';

interface MovieSearchParams {
  searchBy?: 'title' | 'genres';
  search?: string;
}

interface MovieSortParams {
  sortBy?: 'release_date' | 'vote_average';
  sortOrder?: SortType;
}

export const movieSearchChange = (searchParams: MovieSearchParams) =>
  action(ActionTypes.MOVIES_SORT_CHANGE, {
    searchBy: null,
    search: null,
    ...searchParams,
  });

export const movieSortChange = (sortParams: MovieSortParams) =>
  action(ActionTypes.MOVIES_SORT_CHANGE, {
    sortBy: null,
    sortOrder: null,
    ...sortParams,
  });

export const getMovies = () => action(ActionTypes.GET_MOVIES);

export const getMoviesSuccess = (movies: Movie[]) =>
  action(ActionTypes.GET_MOVIES_SUCCESS, { movies });

export const getMoviesFailure = (error: BadRequestError) =>
  action(ActionTypes.GET_MOVIES_FAILURE, error);

export const getMovieById = (id: string) =>
  action(ActionTypes.GET_MOVIE_BY_ID, { id });

export const getMovieByIdSuccess = (movie: Movie) =>
  action(ActionTypes.GET_MOVIE_BY_ID_SUCCESS, { movie });

export const getMovieByIdFailure = (error: BadRequestError) =>
  action(ActionTypes.GET_MOVIE_BY_ID_FAILURE, error);

export const deleteMovie = (id: string) =>
  action(ActionTypes.DELETE_MOVIE, { id });

export const deleteMovieSuccess = () =>
  action(ActionTypes.DELETE_MOVIE_SUCCESS);

export const deleteMovieFailure = (error: BadRequestError) =>
  action(ActionTypes.DELETE_MOVIE_FAILURE, error);
