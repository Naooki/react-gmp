import styled from 'styles/styled-components';
import Button, { ButtonVariant } from 'components/Button';
import { lighten } from 'polished';

const AddMovieButton = styled(Button)`
  &.${ButtonVariant.Default} {
    background: ${lighten(0.2, '#000')};

    &:focus,
    &:hover {
      background: ${lighten(0.25, '#000')};
    }
  }
`;

export default AddMovieButton;
