import ActionTypes from './constants';
import { ContainerState, ContainerActions } from './types';

export const initialState: ContainerState = {
  modalType: null,
  modalProps: {},
};

function modalReducer(
  state: ContainerState = initialState,
  action: ContainerActions,
): ContainerState {
  switch (action.type) {
    case ActionTypes.OPEN_MODAL:
      return {
        ...action.payload,
      };

    case ActionTypes.CLOSE_MODAL:
      return initialState;

    default:
      return state;
  }
}

export default modalReducer;
