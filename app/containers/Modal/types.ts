import { ActionType } from 'typesafe-actions';

import * as actions from './actions';
import { ModalTypes } from './constants';

/* --- STATE --- */
interface ModalState {
  modalType: ModalTypes | null;
  modalProps: { [key: string]: string | number };
}

/* --- ACTIONS --- */
type MoviesActions = ActionType<typeof actions>;

/* --- EXPORTS --- */
type ContainerState = ModalState;
type ContainerActions = MoviesActions;

export { ContainerState, ContainerActions };
