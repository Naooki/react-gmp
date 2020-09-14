import * as React from 'react';
import styled from 'styles/styled-components';

import Heading from 'components/Heading';
import Button, { ButtonVariant } from 'components/Button';
import SearchInput from './SearchInput';

const Wrapper = styled.div`
  padding: 0 3rem;
  margin-bottom: 6rem;
`;

const SearchControlWrapper = styled.div`
  display: grid;
  height: 3rem;
  grid-template-columns: 4fr 1fr;
  grid-column-gap: 1rem;
`;

const MovieSearch = () => {
  return (
    <Wrapper>
      <Heading>find your movie</Heading>
      <SearchControlWrapper>
        <SearchInput placeholder="What do you want to watch?" />
        <Button className={ButtonVariant.Contained} type="button">
          search
        </Button>
      </SearchControlWrapper>
    </Wrapper>
  );
};

export default MovieSearch;
