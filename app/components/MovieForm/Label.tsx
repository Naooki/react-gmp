import styled from 'styles/styled-components';

const Label = styled.label`
  padding: 0.3rem 0;
  font-family: 'Arial';
  color: ${props => props.theme.primary};
  text-transform: uppercase;
`;

export default Label;
