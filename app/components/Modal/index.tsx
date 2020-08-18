import * as React from 'react';
import styled from 'styles/styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(1rem);
  &.display-block {
    display: block;
  }
  &.display-none {
    display: none;
  }
`;

const ModalWrapper = styled.section`
  position: fixed;
  background: ${props => props.theme.componentBackground};
  width: 60%;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
  margin: 0 3rem;
`;

interface Props {
  show: boolean;
  children: React.ReactNode;
  handleClose: () => void;
}

const Modal = (props: Props) => {
  const showHideClassName = props.show
    ? 'modal display-block'
    : 'modal display-none';

  return (
    <Overlay className={showHideClassName}>
      <ModalWrapper>
        <ModalHeader>
          <ModalCloseBtn onClick={props.handleClose}>
            <FontAwesomeIcon icon={faTimes} />
          </ModalCloseBtn>
        </ModalHeader>
        <ModalMain>{props.children}</ModalMain>
      </ModalWrapper>
    </Overlay>
  );
};

export default Modal;
