import { combineEpics, Epic } from 'redux-observable';

import MoviesEpics from 'containers/Movies/epic';
import ModalEpics from 'containers/Modal/epic';

const epics: ReadonlyArray<Epic> = [...MoviesEpics, ...ModalEpics];

export default function createEpic() {
  return combineEpics(...epics);
}
