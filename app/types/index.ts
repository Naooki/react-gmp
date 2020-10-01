import { RouterState } from 'connected-react-router';
import { ContainerState as ModalState } from 'containers/Modal/types';
import { ContainerState as MoviesState } from 'containers/Movies/types';

// Your root reducer type, which is your redux state types also
export interface ApplicationRootState {
  readonly router: RouterState;
  readonly modal: ModalState;
  readonly movies: MoviesState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly

  // for testing purposes
  readonly test: any;
}
