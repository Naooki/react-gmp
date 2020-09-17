import { combineEpics } from 'redux-observable';

import { getMovieByIdEpic, getMoviesEpic } from 'containers/Movies/epic';

export default function createEpic() {
  const rootEpic = combineEpics(getMoviesEpic, getMovieByIdEpic);

  return rootEpic;
}
