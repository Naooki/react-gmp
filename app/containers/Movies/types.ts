import { ActionType } from 'typesafe-actions';

import { Movie } from 'entities/Movie';
import * as actions from './actions';

/* --- STATE --- */
interface MoviesState {
  readonly items: Movie[] | null;
}

/* --- ACTIONS --- */
type MoviesActions = ActionType<typeof actions>;

/* --- EXPORTS --- */
type ContainerState = MoviesState;
type ContainerActions = MoviesActions;

export { ContainerState, ContainerActions };
