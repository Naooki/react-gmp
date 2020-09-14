import * as React from 'react';
import styled from 'styles/styled-components';

import { Movie } from 'entities/Movie';
import Menu from 'components/Menu';
import MenuItem from 'components/Menu/MenuItem';

interface Props {
  movie: Movie;
  onMovieEdit: (id: string) => void;
  onMovieDelete: (id: string) => void;
  onMovieClick: (id: string) => void;
}

const MovieItemWrapper = styled.div`
  position: relative;
  width: 300px;

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

const MovieImage = styled.img.attrs(props => ({
  src: props.src,
  alt: props.alt,
}))`
  display: block;
  width: 100%;
  height: 400px;
`;

const NoImageWrapper = styled.div`
  display: flex;
  height: 400px;
  box-sizing: border-box;
  border: 1px solid ${props => props.theme.text};
  > h4 {
    margin: auto;
    color: ${props => props.theme.text};
  }
`;

const NoImage = () => (
  <NoImageWrapper>
    <h4>No Image Found</h4>
  </NoImageWrapper>
);

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
  const releaseYear = props.movie.releaseDate;
  const genres = React.useMemo(() => props.movie.genres.join(', '), [
    props.movie.genres,
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
      {props.movie.imageUrl ? (
        <MovieImage src={props.movie.imageUrl} alt="Movie poster" />
      ) : (
        <NoImage />
      )}
      <MovieItemDesc>
        <MovieItemHeading>{props.movie.title}</MovieItemHeading>
        <MovieItemYear>{releaseYear}</MovieItemYear>
        <MovieItemGenres>{genres}</MovieItemGenres>
      </MovieItemDesc>
    </MovieItemWrapper>
  );
};

export default MovieListItem;
