import styled from 'styles/styled-components';

const ModalButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 3rem;
  margin: 3rem 0 2rem;
  > button {
    flex-basis: 30%;
  }
  > button:not(:last-child) {
    margin-right: 1rem;
  }
`;

export default ModalButtons;
