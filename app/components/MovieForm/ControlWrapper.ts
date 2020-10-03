import styled from 'styles/styled-components';

const ControlWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-bottom: 1.5rem;

  & > .loader-icon {
    color: ${props => props.theme.primary};
    position: absolute;
    bottom: 2.15rem;
    right: -1.5rem;
  }
`;

export default ControlWrapper;
