import * as React from 'react';
import { Formik, Form } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import styled from 'styles/styled-components';

import cloneDeep from 'utils/cloneDeep';
import { Movie } from 'entities/Movie';
import MovieGenre from 'entities/MovieGenre';
import Button, { ButtonVariant } from 'components/Button';
import ModalButtons from 'containers/Modal/ModalButtons';
import InputControl from './InputControl';
import MutliSelectControl from './MultiSelectControl';

const WrappedForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

const movieGenreOptions = Object.keys(MovieGenre).map(id => ({
  id,
  label: MovieGenre[id],
}));

interface Props {
  movie: Movie;
  loading: boolean;
  onConfirm: (movie: Movie) => void;
}

function MovieForm({ movie, loading, onConfirm }: Props) {
  const [formMovie, setMovie] = React.useState(() => cloneDeep(movie));

  const onReset = React.useCallback(
    e => {
      e.preventDefault();
      setMovie(cloneDeep(movie));
    },
    [movie],
  );

  const onSubmit = React.useCallback(e => onConfirm(e), [onConfirm]);

  const required = React.useCallback((value: string | string[] | number) => {
    const isInvalid = !value || (Array.isArray(value) && !value.length);
    return isInvalid ? 'Required' : undefined;
  }, []);

  return (
    <Formik initialValues={formMovie} onSubmit={onSubmit}>
      <WrappedForm>
        <InputControl
          validate={required}
          type="text"
          name="title"
          label="title"
          placeholder="Title here"
        />
        <InputControl
          type="date"
          name="release_date"
          label="release date"
          placeholder="Select date"
        />
        <InputControl
          type="text"
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
        <InputControl
          type="text"
          name="overview"
          label="overview"
          placeholder="Overview here"
        />
        <InputControl
          validate={required}
          type="number"
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
