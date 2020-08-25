import * as React from 'react';
import styled from 'styles/styled-components';

import { Movie } from 'entities/Movie';
import MovieGenre from 'entities/MovieGenre';
import Button, { ButtonVariant } from 'components/Button';
import TextControl from './TextControl';
import DateControl from './DateControl';
import NumberControl from './NumberControl';
import MutliSelectControl from './MultiSelectControl';

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

const movieGenreOptions = Object.keys(MovieGenre).map(id => ({
  id,
  label: MovieGenre[id],
}));

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

  const updateMovieGenres = (value: { id: string; label: string }[]) => {
    const genres = value.map(v => v.id as MovieGenre);
    setMovie({
      ...movie,
      genres,
    });
  };

  const selectedGenres = movie.genres
    ? movieGenreOptions.filter(option =>
        movie.genres.find(genre => genre === option.label),
      )
    : [];

  return (
    <Form>
      <TextControl
        id="title"
        label="title"
        placeholder="Title here"
        value={movie.title}
        onChange={value => updateMovie('title', value)}
      />
      <DateControl
        id="releaseDate"
        label="release date"
        placeholder="Select date"
        value={movie.releaseDate}
        onChange={value => updateMovie('releaseDate', value)}
      />
      <TextControl
        id="movieUrl"
        label="movie url"
        placeholder="Movie URL here"
        value={movie.imageUrl || ''}
        onChange={value => updateMovie('imageUrl', value)}
      />
      {/* <select name="genre" title="genre">
        <option value="crime">Crime</option>
        <option value="documentary">Documentary</option>
        <option value="horror">Horror</option>
        <option value="comedy">Comedy</option>
      </select> */}
      <MutliSelectControl
        id="movieGenres"
        label="genre"
        placeholder="Select genre"
        value={selectedGenres}
        options={movieGenreOptions}
        onChange={updateMovieGenres}
      />
      <TextControl
        id="movieOverview"
        label="overview"
        placeholder="Overview here"
        value={movie.about}
        onChange={value => updateMovie('about', value)}
      />
      <NumberControl
        id="movieRuntime"
        label="runtime"
        placeholder="Runtime here"
        value={movie.duration}
        onChange={value => updateMovie('duration', value)}
      />

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
