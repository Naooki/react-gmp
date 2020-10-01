import * as React from 'react';
import styled from 'styles/styled-components';

import { Movie } from 'entities/Movie';
import Menu from 'components/Menu';
import MenuItem from 'components/Menu/MenuItem';
import MovieImage from 'components/MovieImage';

interface Props {
  movie: Movie;
  onMovieEdit: (id: number) => void;
  onMovieDelete: (id: number) => void;
  onMovieClick: (id: number) => void;
}

const MovieItemWrapper = styled.div`
  position: relative;
  width: 300px;
  margin: 0 auto;

  & > .movie-item-menu {
    display: none;
    position: absolute;
    top: 1rem;
    right: 1rem;
  }

  & > .movie-item-menu.opened {
    display: block;
  }

  &:hover > .movie-item-menu {
    display: block;
  }
`;

const MovieItemDesc = styled.div`
  padding: 0.5rem 0;
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  color: #ccc;
`;

const MovieItemHeading = styled.h3`
  flex-basis: 200px;
  margin: 0;
  font-size: 1.1rem;
`;

const MovieItemYear = styled.div`
  flex-basis: 100px;
  padding: 0.1rem 0;
  box-sizing: border-box;
  text-align: center;
  font-size: 0.9rem;
  border: 1px solid ${props => props.theme.text};
  border-radius: 4px;
`;

const MovieItemGenres = styled.span`
  display: inline-block;
  width: 100%;
  color: #aaa;
  font-size: 0.8rem;
`;

const MovieListItem = (props: Props) => {
  const releaseYear = props.movie.release_date;
  const genres = React.useMemo(() => props.movie?.genres?.join(', ') || '', [
    props.movie,
  ]);

  return (
    <MovieItemWrapper onClick={() => props.onMovieClick(props.movie.id)}>
      <Menu className="movie-item-menu">
        <MenuItem onClick={() => props.onMovieEdit(props.movie.id)}>
          Edit
        </MenuItem>
        <MenuItem onClick={() => props.onMovieDelete(props.movie.id)}>
          Delete
        </MenuItem>
      </Menu>
      <MovieImage src={props.movie.poster_path} alt="Movie poster" />
      <MovieItemDesc>
        <MovieItemHeading>{props.movie.title}</MovieItemHeading>
        <MovieItemYear>{releaseYear}</MovieItemYear>
        <MovieItemGenres>{genres}</MovieItemGenres>
      </MovieItemDesc>
    </MovieItemWrapper>
  );
};

export default MovieListItem;
