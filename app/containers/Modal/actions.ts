import { action } from 'typesafe-actions';

import ActionTypes, { ModalTypes } from './constants';

export const openModal = (modalState: {
  modalType: ModalTypes;
  modalProps: { [key: string]: string };
}) => action(ActionTypes.OPEN_MODAL, modalState);

export const closeModal = () => action(ActionTypes.CLOSE_MODAL);
