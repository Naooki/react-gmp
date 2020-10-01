import ActionTypes from './constants';
import { ContainerState, ContainerActions } from './types';

export const initialState: ContainerState = {
  modalType: null,
  modalProps: {
    loading: false,
  },
};

function modalReducer(
  state: ContainerState = initialState,
  action: ContainerActions,
): ContainerState {
  switch (action.type) {
    case ActionTypes.OPEN_MODAL:
      return {
        ...state,
        ...action.payload,
      };

    case ActionTypes.TOGGLE_LOADING:
      return {
        ...state,
        modalProps: {
          ...state.modalProps,
          loading: action.payload.loading,
        },
      };

    case ActionTypes.CLOSE_MODAL:
      return initialState;

    default:
      return state;
  }
}

export default modalReducer;
