import ActionTypes from './constants';
import { ContainerState, ContainerActions } from './types';

export const initialState: ContainerState = {
  items: null,
  selectedItem: null,
};

function moviesReducer(
  state: ContainerState = initialState,
  action: ContainerActions,
): ContainerState {
  switch (action.type) {
    case ActionTypes.GET_MOVIES_SUCCESS:
      return {
        ...state,
        items: action.payload.movies,
      };
    default:
      return state;
  }
}

export default moviesReducer;
