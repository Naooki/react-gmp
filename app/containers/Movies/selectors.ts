import { createSelector } from 'reselect';

import { ApplicationRootState } from 'types';
import { initialState } from './reducer';

const selectMoviesDomain = (state: ApplicationRootState) =>
  state.movies || initialState;

const makeSelectMovieItems = () =>
  createSelector(selectMoviesDomain, substate => substate.items);

export { makeSelectMovieItems };
