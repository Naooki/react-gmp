import { createSelector } from 'reselect';

import { ApplicationRootState } from 'types';
import { initialState } from './reducer';

const selectMoviesDomain = (state: ApplicationRootState) =>
  state.movies || initialState;

const makeSelectMovieItems = () =>
  createSelector(selectMoviesDomain, substate => substate.items);

const makeSelectSelectedMovie = () =>
  createSelector(selectMoviesDomain, substate => substate.selectedItem);

export { makeSelectMovieItems, makeSelectSelectedMovie };
