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

interface Props {
  value: string;
  onSearchChange: (searchText: string) => void;
}

const MovieSearch = (props: Props) => {
  const [value, setValue] = React.useState(props.value);

  return (
    <Wrapper>
      <Heading>find your movie</Heading>
      <SearchControlWrapper>
        <SearchInput
          placeholder="What do you want to watch?"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <Button
          className={ButtonVariant.Contained}
          type="button"
          onClick={() => props.onSearchChange(value)}
        >
          search
        </Button>
      </SearchControlWrapper>
    </Wrapper>
  );
};

export default MovieSearch;
