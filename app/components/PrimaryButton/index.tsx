import styled from 'styles/styled-components';

const PrimaryButton = styled.button`
  color: ${props => props.theme.text};
  background: ${props => props.theme.primary};
  &:hover,
  &:focus {
    outline: none;
    background: #f03040;
  }

  padding: 0.5rem;
  cursor: pointer;
  border: 2px solid transparent;
  text-transform: uppercase;
  border-radius: 4px;
`;

export default PrimaryButton;
