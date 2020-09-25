import { createSelector } from 'reselect';

import { ApplicationRootState } from 'types';
import { initialState } from './reducer';

const selectMoviesDomain = (state: ApplicationRootState) =>
  state.movies || initialState;

const makeSelectMovieItems = () =>
  createSelector(selectMoviesDomain, substate => substate.items);

const makeSelectSelectedMovie = () =>
  createSelector(selectMoviesDomain, substate => substate.selectedItem);

const makeSelectMovieById = (id: number) =>
  createSelector(selectMoviesDomain, substate =>
    substate.items?.find(movie => movie.id === id),
  );

export { makeSelectMovieItems, makeSelectSelectedMovie, makeSelectMovieById };
