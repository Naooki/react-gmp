import { action } from 'typesafe-actions';

import ActionTypes, { ModalProps, ModalTypes } from './constants';

export const openModal = (modalState: {
  modalType: ModalTypes;
  modalProps: ModalProps;
}) => action(ActionTypes.OPEN_MODAL, modalState);

export const closeModal = () => action(ActionTypes.CLOSE_MODAL);

export const toggleLoading = (loading: boolean) =>
  action(ActionTypes.TOGGLE_LOADING, { loading });
