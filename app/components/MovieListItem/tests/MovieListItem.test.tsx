import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, cleanup, fireEvent } from '@testing-library/react';

import { Movie } from 'entities/Movie';
import MovieGenre from 'entities/MovieGenre';
import { theme } from 'styles/styled-components';
import MovieListItem from '..';

let props;

const movie: Movie = {
  title: 'La La Land',
  tagline: "Here's to the fools who dream.",
  vote_average: 7.9,
  vote_count: 6782,
  release_date: '2016-12-29',
  poster_path:
    'https://image.tmdb.org/t/p/w500/ylXCdC106IKiarftHkcacasaAcb.jpg',
  overview:
    'Mia, an aspiring actress, serves lattes to movie stars in between auditions and Sebastian, a jazz musician, scrapes by playing cocktail party gigs in dingy bars, but as success mounts they are faced with decisions that begin to fray the fragile fabric of their love affair, and the dreams they worked so hard to maintain in each other threaten to rip them apart.',
  budget: 30000000,
  revenue: 445435700,
  runtime: 128,
  genres: [MovieGenre.Comedy, MovieGenre.Drama, MovieGenre.Romance],
  id: 313369,
};

beforeEach(() => {
  props = {
    movie,
    onMovieEdit: jest.fn(),
    onMovieDelete: jest.fn(),
    onMovieClick: jest.fn(),
  };
});

afterEach(cleanup);

describe('<MovieListItem />', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(
      <ThemeProvider theme={theme.default}>
        <MovieListItem {...props} />
      </ThemeProvider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should call onMovieClick on image click', () => {
    const { getByAltText } = render(
      <ThemeProvider theme={theme.default}>
        <MovieListItem {...props} />
      </ThemeProvider>,
    );

    expect(props.onMovieClick).not.toHaveBeenCalled();
    fireEvent(
      getByAltText('Movie poster'),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    );
    expect(props.onMovieClick).toHaveBeenCalledWith(313369);
  });
});
