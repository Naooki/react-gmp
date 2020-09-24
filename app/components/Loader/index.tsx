import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import styled from 'styles/styled-components';

const LoaderContainer = styled.div`
  display: flex;
  height: 100%;
  font-size: 6rem;
  color: ${props => props.theme.primary};

  > .loader-icon {
    margin: auto;
  }
`;

const Loader = () => {
  return (
    <LoaderContainer>
      <FontAwesomeIcon className="loader-icon" icon={faSpinner} spin />
    </LoaderContainer>
  );
};

export default Loader;
