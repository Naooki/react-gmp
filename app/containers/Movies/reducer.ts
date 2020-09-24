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
    case ActionTypes.GET_MOVIES:
      return {
        ...state,
        items: null,
      };

    case ActionTypes.GET_MOVIES_SUCCESS:
      return {
        ...state,
        items: action.payload.movies,
      };

    case ActionTypes.GET_MOVIE_BY_ID:
      return {
        ...state,
        selectedItem: null,
      };

    case ActionTypes.GET_MOVIE_BY_ID_SUCCESS:
      return {
        ...state,
        selectedItem: action.payload.movie,
      };
    default:
      return state;
  }
}

export default moviesReducer;
