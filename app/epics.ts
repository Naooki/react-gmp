import { combineEpics } from 'redux-observable';

import { getMoviesEpic } from 'containers/Movies/epic';

export default function createEpic() {
  const rootEpic = combineEpics(getMoviesEpic);

  return rootEpic;
}
