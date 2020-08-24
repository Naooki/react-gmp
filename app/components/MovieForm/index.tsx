import * as React from 'react';
import styled from 'styles/styled-components';

import { Movie } from 'entities/Movie';
import Button, { ButtonVariant } from 'components/Button';
import Control from './Control';

interface Props {
  movie?: Movie;
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormActions = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 3rem;
  margin: 3rem 0 2rem;
  > button {
    flex-basis: 30%;
  }
  > button:not(:last-child) {
    margin-right: 1rem;
  }
`;

function MovieForm(props: Props) {
  const [movie, setMovie] = React.useState(props.movie || ({} as Movie));

  const updateMovie = (
    key: keyof Movie,
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setMovie({
      ...movie,
      [key]: e.target.value,
    });
  };

  return (
    <Form>
      <Control
        type="text"
        id="title"
        label="title"
        value={movie.title || ''}
        onChange={value => updateMovie('title', value)}
      />
      <input
        type="date"
        title="release date"
        value={movie.releaseDate}
        onChange={value => updateMovie('releaseDate', value)}
      />
      <input type="url" title="movie url" />
      <select name="genre" title="genre">
        <option value="crime">Crime</option>
        <option value="documentary">Documentary</option>
        <option value="horror">Horror</option>
        <option value="comedy">Comedy</option>
      </select>
      <input type="text" title="overview" />
      <input type="number" title="runtime" />

      <FormActions>
        <Button className={ButtonVariant.Outlined} type="reset">
          reset
        </Button>
        <Button className={ButtonVariant.Contained} type="submit">
          submit
        </Button>
      </FormActions>
    </Form>
  );
}

export default MovieForm;
