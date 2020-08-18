import * as React from 'react';
import styled from 'styles/styled-components';

import TextInput from 'components/TextInput';
import Button, { ButtonVariant } from 'components/Button';
import Heading from './Heading';

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
        <TextInput placeholder="What do you want to watch?" />
        <Button className={ButtonVariant.Contained} type="button">
          search
        </Button>
      </SearchControlWrapper>
    </Wrapper>
  );
};

export default MovieSearch;
