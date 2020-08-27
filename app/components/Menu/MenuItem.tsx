import styled from 'styles/styled-components';

const MenuItem = styled.li`
  min-width: 120px;
  padding: 0.5rem 1rem;
  color: ${props => props.theme.text};
  &:hover {
    background: ${props => props.theme.primary};
  }
`;

export default MenuItem;
