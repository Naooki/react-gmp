import styled from 'styles/styled-components';
import { darken } from 'polished';

const TextControl = styled.input`
  padding: 1rem;
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

export default TextControl;
