import { ContainerState as MoviesState } from 'containers/Movies/types';

// Your root reducer type, which is your redux state types also
export interface ApplicationRootState {
  // readonly router: RouterState;
  readonly movies: MoviesState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly

  // for testing purposes
  readonly test: any;
}
