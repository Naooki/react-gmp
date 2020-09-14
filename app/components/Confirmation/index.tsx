import * as React from 'react';
import styled from 'styles/styled-components';

import Button, { ButtonVariant } from 'components/Button';
import ModalHeading from 'components/Modal/ModalHeading';
import ModalActions from 'components/Modal/ModalActions';

interface Props {
  heading: string;
  text: string;
  onConfirm: () => void;
}

const ConfirmationText = styled.p`
  margin-bottom: 1rem;
  color: ${props => props.theme.text};
  font-family: inherit;
`;

function Confirmation(props: Props) {
  return (
    <>
      <ModalHeading>{props.heading}</ModalHeading>
      <ConfirmationText>{props.text}</ConfirmationText>
      <ModalActions>
        <Button
          className={ButtonVariant.Contained}
          type="button"
          onClick={props.onConfirm}
        >
          confirm
        </Button>
      </ModalActions>
    </>
  );
}

export default Confirmation;
