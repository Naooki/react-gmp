import { Movie } from 'entities/Movie';
import moviesReducer, { initialState } from '../reducer';
import {
  deleteMovie,
  getMovieById,
  getMovieByIdSuccess,
  getMovies,
  getMoviesSuccess,
} from '../actions';

describe('Movies Reducer', () => {
  it('should not modify state in case of side-effect action', () => {
    const state = moviesReducer(initialState, deleteMovie('42'));
    expect(state).toEqual(initialState);
  });

  it('should set movies on GetMoviesSuccess', () => {
    const movies = [{ id: 322 }, { id: 42 }] as Movie[];
    const state = moviesReducer(initialState, getMoviesSuccess(movies));
    expect(state.items).toEqual(movies);
  });

  it('should drop movies on GetMovies', () => {
    const items = [{ id: 322 }, { id: 42 }] as Movie[];
    const state = moviesReducer(
      {
        ...initialState,
        items,
      },
      getMovies(),
    );
    expect(state.items).toEqual(null);
  });

  it('should set selected movie on GetMovieByIdSuccess', () => {
    const movie = { id: 42 } as Movie;
    const state = moviesReducer(initialState, getMovieByIdSuccess(movie));
    expect(state.selectedItem).toEqual(movie);
  });

  it('should drop selected movie on GetMovieById', () => {
    const selectedItem = { id: 42 } as Movie;
    const state = moviesReducer(
      {
        ...initialState,
        selectedItem,
      },
      getMovieById('test'),
    );
    expect(state.selectedItem).toEqual(null);
  });
});
