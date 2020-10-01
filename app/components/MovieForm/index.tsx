import * as React from 'react';
import { Formik, Form } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import styled from 'styles/styled-components';

import { Movie } from 'entities/Movie';
import MovieGenre from 'entities/MovieGenre';
import Button, { ButtonVariant } from 'components/Button';
import ModalButtons from 'containers/Modal/ModalButtons';
import TextControl from './TextControl';
import DateControl from './DateControl';
import NumberControl from './NumberControl';
import MutliSelectControl from './MultiSelectControl';

const WrappedForm = styled(Form)`
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

  const onReset = React.useCallback(
    e => {
      e.preventDefault();
      setMovie(cloneDeep(movie));
    },
    [movie],
  );

  const onSubmit = React.useCallback(e => onConfirm(e), [onConfirm]);

  return (
    <Formik initialValues={formMovie} onSubmit={onSubmit}>
      <WrappedForm>
        <TextControl name="title" label="title" placeholder="Title here" />
        <DateControl
          id="releaseDate"
          label="release date"
          placeholder="Select date"
          value={formMovie.release_date}
          onChange={value => updateMovie('release_date', value)}
        />
        <TextControl
          name="poster_path"
          label="movie url"
          placeholder="Movie URL here"
        />
        <MutliSelectControl
          name="genres"
          label="genre"
          placeholder="Select genre"
          options={movieGenreOptions}
        />
        <TextControl
          name="overview"
          label="overview"
          placeholder="Overview here"
        />
        <NumberControl
          name="runtime"
          label="runtime"
          placeholder="Runtime here"
        />

        <ModalButtons>
          <Button
            className={
              loading ? ButtonVariant.Disabled : ButtonVariant.Outlined
            }
            type="reset"
            onClick={onReset}
            disabled={loading}
          >
            reset
          </Button>
          <Button
            className={
              loading ? ButtonVariant.Disabled : ButtonVariant.Contained
            }
            type="submit"
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
      </WrappedForm>
    </Formik>
  );
}

export default MovieForm;
