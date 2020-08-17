import * as React from 'react';
import styled from 'styles/styled-components';

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
        {props.children}
        <button type="button" onClick={props.handleClose}>
          close
        </button>
      </ModalWrapper>
    </Overlay>
  );
};

export default Modal;
