import styled from 'styles/styled-components';

const ErrorMsg = styled.div`
  position: absolute;
  bottom: 0;
  padding: 0.1rem 0;
  color: ${props => props.theme.primary};
  font-size: 0.8rem;
  font-weight: 100;
`;

export default ErrorMsg;
