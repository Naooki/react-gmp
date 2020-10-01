import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styles/styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import AddMovie from 'containers/AddMovie';
import EditMovie from 'containers/EditMovie';
import Confirmation from 'components/Confirmation';
import { ModalTypes } from './constants';
import { makeSelectModalProps, makeSelectModalType } from './selectors';
import { closeModal } from './actions';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(1rem);
`;

const Dialog = styled.section`
  position: fixed;
  max-height: 80%;
  width: 60%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: grid;
  grid-template-rows: auto minmax(0, 1fr);
  background: ${props => props.theme.componentBackground};
`;

const ModalHeader = styled.header`
  display: flex;
  justify-content: flex-end;
  padding: 0.5rem;
`;

const ModalCloseBtn = styled.button`
  padding: 0.5rem;
  font-size: 1.5rem;
  background: transparent;
  color: ${props => props.theme.text};
  border: none;
  :focus {
    outline: none;
  }
`;

const ModalMain = styled.main`
  display: grid;
  grid-template-rows: auto minmax(0, 1fr);
  padding: 0 3rem;
  overflow: auto;
`;

const ModalComponents: { [key in ModalTypes]: React.ReactNode } = {
  [ModalTypes.ADD_MOVIE]: AddMovie,
  [ModalTypes.EDIT_MOVIE]: EditMovie,
  [ModalTypes.CONFIRMATION]: Confirmation,
};

const Modal = () => {
  const dispatch = useDispatch();
  const modalType = useSelector(makeSelectModalType());
  const modalProps = useSelector(makeSelectModalProps());

  const ModalView = (typeof modalType === 'number'
    ? ModalComponents[modalType]
    : null) as typeof React.Component;

  const onCloseClick = React.useCallback(() => {
    dispatch(closeModal());
  }, [dispatch]);

  return ModalView ? (
    <Overlay>
      <Dialog>
        <ModalHeader>
          <ModalCloseBtn onClick={onCloseClick}>
            <FontAwesomeIcon icon={faTimes} />
          </ModalCloseBtn>
        </ModalHeader>
        <ModalMain>
          <ModalView {...modalProps} />
        </ModalMain>
      </Dialog>
    </Overlay>
  ) : null;
};

export default Modal;
