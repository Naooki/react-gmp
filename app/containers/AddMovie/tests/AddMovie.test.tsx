import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { createStore, Store } from 'redux';

import { Movie } from 'entities/Movie';
import ActionTypes from 'containers/Movies/constants';
import moviesReducer from 'containers/Movies/reducer';
import { theme } from 'styles/styled-components';
import {
  act,
  cleanup,
  fireEvent,
  render,
  RenderResult,
} from '@testing-library/react';
import AddMovie from '..';

function renderComponent(): [Store, RenderResult] {
  const store = createStore(moviesReducer, {
    items: null,
    selectedItem: null,
  });
  store.dispatch = jest.fn();

  const utils = render(
    <Provider store={store}>
      <ThemeProvider theme={theme.default}>
        <AddMovie loading={false} />
      </ThemeProvider>
    </Provider>,
  );

  return [store, utils];
}

function populateTestData(
  renderResults: RenderResult,
  data?: Partial<Movie>,
): void {
  const title = renderResults.getByPlaceholderText(
    /Title here/,
  ) as HTMLInputElement;
  fireEvent.change(title, { target: { value: data?.title || 'Test title' } });

  const posterPath = renderResults.getByPlaceholderText(
    /Movie URL here/,
  ) as HTMLInputElement;
  fireEvent.change(posterPath, {
    target: { value: data?.poster_path || 'http://example.com/' },
  });

  const runtime = renderResults.getByPlaceholderText(
    /Runtime here/,
  ) as HTMLInputElement;
  fireEvent.change(runtime, {
    target: { value: data?.runtime?.toString() || '123' },
  });

  const overview = renderResults.getByPlaceholderText(
    /Overview here/,
  ) as HTMLInputElement;
  fireEvent.change(overview, {
    target: { value: data?.overview || 'Test overview' },
  });

  const genres = renderResults.getByPlaceholderText(
    /Select genre/,
  ) as HTMLInputElement;
  fireEvent.click(genres);

  const option = renderResults.getByText(/Horror/);
  fireEvent.click(option);
}

describe('<AddMovie />', () => {
  afterEach(cleanup);

  it('matches snapshot', () => {
    const [, renderResult] = renderComponent();
    expect(renderResult.asFragment()).toMatchSnapshot();
  });

  it('should dispatch createMovie action on submit', async () => {
    const [store, utils] = renderComponent();

    populateTestData(utils);

    await act(async () => {
      const submit = utils.getByText(/submit/);
      fireEvent.click(submit);
    });

    expect(store.dispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        type: ActionTypes.CREATE_MOVIE,
        payload: {
          genres: ['Horror'],
          overview: 'Test overview',
          poster_path: 'http://example.com/',
          release_date: '',
          runtime: 123,
          title: 'Test title',
        },
      }),
    );
  });

  it('should not dispatch createMovie action when the the poster_path is invalid', async () => {
    const [store, utils] = renderComponent();

    populateTestData(utils, { poster_path: 'test-invalid-url' });

    await act(async () => {
      const submit = utils.getByText(/submit/);
      fireEvent.click(submit);
    });
    const uriError = utils.getByText(/Invalid URI/);

    expect(store.dispatch).not.toHaveBeenCalled();
    expect(uriError).toBeDefined();
  });
});
