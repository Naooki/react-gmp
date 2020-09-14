import styled from 'styles/styled-components';

const Heading = styled.h1`
  margin: 1rem 0 2rem;
  font-size: 2rem;
  font-weight: 100;
  color: ${props => props.theme.text};
  text-transform: uppercase;
`;

export default Heading;
