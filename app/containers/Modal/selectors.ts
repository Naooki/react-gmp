import { createSelector } from 'reselect';

import { ApplicationRootState } from 'types';
import { initialState } from './reducer';

const selectModalDomain = (state: ApplicationRootState) =>
  state.modal || initialState;

const makeSelectModalType = () =>
  createSelector(selectModalDomain, substate => substate.modalType);

const makeSelectModalProps = () =>
  createSelector(selectModalDomain, substate => substate.modalProps);

export { makeSelectModalType, makeSelectModalProps };
