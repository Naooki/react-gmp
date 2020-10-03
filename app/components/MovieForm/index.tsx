import * as React from 'react';
import { Formik, Form } from 'formik';
import styled from 'styles/styled-components';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { catchError, map, tap } from 'rxjs/operators';
import debounce from 'lodash-es/debounce';

import cloneDeep from 'utils/cloneDeep';
import { Movie } from 'entities/Movie';
import MovieGenre from 'entities/MovieGenre';
import MoviesResponse from 'entities/MoviesResponse';
import ModalButtons from 'containers/Modal/ModalButtons';
import InputControl from './InputControl';
import MutliSelectControl from './MultiSelectControl';
import MovieFormActions from './MovieFormActions';
import { MovieFormModel } from './MovieFormModel';

const API_URL = 'http://localhost:4000';

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

  const [valdatingTitle, setValidatingTitle] = React.useState(false);
  const movieTitleValidator = React.useCallback((value: string) => {
    setValidatingTitle(true);
    return ajax
      .getJSON<MoviesResponse>(`${API_URL}/movies?search=${value}`)
      .pipe(
        map(response => response.data),
        map(movies =>
          movies.find(m => m.title.toLowerCase() === value.toLowerCase()),
        ),
        map(m => (m ? 'Movie with this title already exists.' : undefined)),
        catchError(() => of(undefined)),
        tap(() => setValidatingTitle(false)),
      )
      .toPromise();
  }, []);

  const debouncedValidator = React.useMemo(
    () => debounce(movieTitleValidator, 500),
    [movieTitleValidator],
  );

  return (
    <Formik
      initialValues={formMovie}
      validate={requiredFieldsValidator}
      onSubmit={onSubmit}
    >
      <WrappedForm>
        <InputControl
          validating={valdatingTitle}
          validate={formMovie.title ? null : debouncedValidator}
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
