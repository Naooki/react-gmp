import * as React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styles/styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
  position: relative;
  z-index: 0;
`;

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
  padding: 0 3rem;
  overflow-y: scroll;
`;

const mockDiv = document.createElement('div');
mockDiv.classList.add('modal-container');
const Context = React.createContext(mockDiv);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const modalRef = React.useRef<HTMLDivElement>(null);
  const [context, setContext] = React.useState<HTMLDivElement>(mockDiv);

  // make sure re-render is triggered after initial
  // render so that modalRef exists
  React.useEffect(() => {
    if (modalRef.current) {
      setContext(modalRef.current);
    }
  }, []);

  return (
    <Container>
      <Context.Provider value={context}>{children}</Context.Provider>
      <div ref={modalRef} />
    </Container>
  );
}

interface Props {
  children: React.ReactNode;
  onClose: () => void;
}

const Modal = (props: Props) => {
  const modalNode = React.useContext(Context);

  return modalNode
    ? ReactDOM.createPortal(
        <Overlay>
          <Dialog>
            <ModalHeader>
              <ModalCloseBtn onClick={props.onClose}>
                <FontAwesomeIcon icon={faTimes} />
              </ModalCloseBtn>
            </ModalHeader>
            <ModalMain>{props.children}</ModalMain>
          </Dialog>
        </Overlay>,
        modalNode,
      )
    : null;
};

export default Modal;
