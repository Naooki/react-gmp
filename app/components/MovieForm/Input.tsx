import styled from 'styles/styled-components';
import { darken } from 'polished';

const Input = styled.input`
  padding: 0.5rem 1rem;
  background: ${props => props.theme.componentBackgroundSecondary};
  color: ${props => props.theme.text};
  border: none;
  border: 1px solid transparent;
  border-radius: 4px;
  &:hover,
  &:focus {
    outline: none;
    background: ${props =>
      darken(0.05, props.theme.componentBackgroundSecondary)};
  }
`;

export default Input;
