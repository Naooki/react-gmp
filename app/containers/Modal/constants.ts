enum ActionTypes {
  OPEN_MODAL = 'app/Modal/OPEN_MODAL',
  CLOSE_MODAL = 'app/Modal/CLOSE_MODAL',
  TOGGLE_LOADING = 'app/Modal/TOGGLE_LOADING',
}

export enum ModalTypes {
  ADD_MOVIE,
  EDIT_MOVIE,
  CONFIRMATION,
}

export interface ModalProps {
  loading?: boolean;
  [key: string]: any;
}

export default ActionTypes;
