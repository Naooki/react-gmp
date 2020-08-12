import styled from 'styles/styled-components';
import { Link } from 'react-router-dom';

const IconLink = styled(Link)`
  color: ${props => props.theme.primary};
  background: transparent;
  border-radius: 50%;
`;

export default IconLink;
