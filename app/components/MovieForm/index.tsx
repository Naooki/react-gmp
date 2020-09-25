import * as React from 'react';
import styled from 'styles/styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import { Movie } from 'entities/Movie';
import MovieGenre from 'entities/MovieGenre';
import Button, { ButtonVariant } from 'components/Button';
import ModalButtons from 'containers/Modal/ModalButtons';
import TextControl from './TextControl';
import DateControl from './DateControl';
import NumberControl from './NumberControl';
import MutliSelectControl from './MultiSelectControl';

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const movieGenreOptions = Object.keys(MovieGenre).map(id => ({
  id,
  label: MovieGenre[id],
}));

type CloneDeep = <T>(value: T) => T;
const cloneDeep: CloneDeep = obj => JSON.parse(JSON.stringify(obj));

interface Props {
  movie: Movie;
  loading: boolean;
  onConfirm: (movie: Movie) => void;
}

function MovieForm({ movie, loading, onConfirm }: Props) {
  const [formMovie, setMovie] = React.useState(() => cloneDeep(movie));

  const updateMovie = (
    key: keyof Movie,
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setMovie({
      ...formMovie,
      [key]: key === 'runtime' ? +e.target.value : e.target.value,
    });
  };

  const updateMovieGenres = (value: { id: string; label: string }[]) => {
    const genres = value.map(v => v.id as MovieGenre);
    setMovie({
      ...formMovie,
      genres,
    });
  };

  const selectedGenres = formMovie.genres
    ? movieGenreOptions.filter(option =>
        formMovie?.genres?.find(genre => genre === option.label),
      )
    : [];

  const onReset = React.useCallback(
    e => {
      e.preventDefault();
      setMovie(cloneDeep(movie));
    },
    [movie],
  );

  const onSubmit = React.useCallback(
    e => {
      e.preventDefault();
      onConfirm(formMovie);
    },
    [formMovie, onConfirm],
  );

  return (
    <Form>
      <TextControl
        id="title"
        label="title"
        placeholder="Title here"
        value={formMovie.title}
        onChange={value => updateMovie('title', value)}
      />
      <DateControl
        id="releaseDate"
        label="release date"
        placeholder="Select date"
        value={formMovie.release_date}
        onChange={value => updateMovie('release_date', value)}
      />
      <TextControl
        id="movieUrl"
        label="movie url"
        placeholder="Movie URL here"
        value={formMovie.poster_path || ''}
        onChange={value => updateMovie('poster_path', value)}
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
        value={formMovie.overview || ''}
        onChange={value => updateMovie('overview', value)}
      />
      <NumberControl
        id="movieRuntime"
        label="runtime"
        placeholder="Runtime here"
        value={formMovie.runtime}
        onChange={value => updateMovie('runtime', value)}
      />

      <ModalButtons>
        <Button
          className={loading ? ButtonVariant.Disabled : ButtonVariant.Outlined}
          type="reset"
          onClick={onReset}
          disabled={loading}
        >
          reset
        </Button>
        <Button
          className={loading ? ButtonVariant.Disabled : ButtonVariant.Contained}
          type="submit"
          onClick={onSubmit}
          disabled={loading}
        >
          {loading ? (
            <FontAwesomeIcon
              className="loader-icon"
              size="2x"
              icon={faSpinner}
              spin
            />
          ) : (
            'submit'
          )}
        </Button>
      </ModalButtons>
    </Form>
  );
}

export default MovieForm;
