import * as React from 'react';
import { Formik, Form } from 'formik';
import styled from 'styles/styled-components';

import cloneDeep from 'utils/cloneDeep';
import { Movie } from 'entities/Movie';
import MovieGenre from 'entities/MovieGenre';
import ModalButtons from 'containers/Modal/ModalButtons';
import InputControl from './InputControl';
import MutliSelectControl from './MultiSelectControl';
import MovieFormActions from './MovieFormActions';
import { MovieFormModel } from './MovieFormModel';

const WrappedForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

const movieGenreOptions = Object.keys(MovieGenre).map(id => ({
  id,
  label: MovieGenre[id],
}));

interface Props {
  movie: MovieFormModel;
  loading: boolean;
  onConfirm: (movie: Movie) => void;
}

function MovieForm({ movie, loading, onConfirm }: Props) {
  const [formMovie] = React.useState(() => cloneDeep(movie));

  const onSubmit = React.useCallback(e => onConfirm(e), [onConfirm]);

  const requiredFieldsValidator = React.useCallback((values: Movie) => {
    const errors: { [key in keyof Movie]?: 'Required' } = {};

    const requiredFields: ReadonlyArray<keyof Movie> = [
      'title',
      'poster_path',
      'overview',
      'runtime',
      'genres',
    ];
    requiredFields.forEach(field => {
      if (!values[field]) {
        errors[field] = 'Required';
      }
    });
    if (!Array.isArray(values.genres) || !values.genres.length) {
      errors.genres = 'Required';
    }

    return errors;
  }, []);

  const uriValidator = React.useCallback((value: string) => {
    try {
      // eslint-disable-next-line no-new
      new URL(value);
      return undefined;
    } catch {
      return 'Invalid URI';
    }
  }, []);

  return (
    <Formik
      initialValues={formMovie}
      validate={requiredFieldsValidator}
      onSubmit={onSubmit}
    >
      <WrappedForm>
        <InputControl
          type="text"
          name="title"
          label="title*"
          placeholder="Title here"
        />
        <InputControl
          type="date"
          name="release_date"
          label="release date"
          placeholder="Select date"
        />
        <InputControl
          validate={uriValidator}
          type="text"
          name="poster_path"
          label="movie url*"
          placeholder="Movie URL here"
        />
        <MutliSelectControl
          name="genres"
          label="genre*"
          placeholder="Select genre"
          options={movieGenreOptions}
        />
        <InputControl
          type="text"
          name="overview"
          label="overview*"
          placeholder="Overview here"
        />
        <InputControl
          type="number"
          name="runtime"
          label="runtime*"
          placeholder="Runtime here"
        />

        <ModalButtons>
          <MovieFormActions loading={loading} />
        </ModalButtons>
      </WrappedForm>
    </Formik>
  );
}

export default MovieForm;
