import styled from 'styles/styled-components';

const SecondaryButton = styled.button`
  padding: 0.5rem;
  border: 2px solid transparent;
  color: ${props => props.theme.primary};
  background: ${props => props.theme.componentBackgroundSecondary};
  text-transform: uppercase;
  font-weight: bold;
  &:hover,
  &:focus {
    outline: none;
    border: 2px solid ${props => props.theme.primary};
  }
`;

export default SecondaryButton;
