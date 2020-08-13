import * as React from 'react';
import styled from 'styles/styled-components';

import { Movie } from 'entities/Movie';

interface Props {
  movie: Movie;
}

const MovieItemWrapper = styled.div`
  width: 300px;
`;

const MovieImage = styled.img.attrs(props => ({
  src: props.src,
  alt: props.alt,
}))`
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

const MovieItemAbout = styled.span`
  display: inline-block;
  width: 100%;
  color: #aaa;
  font-size: 0.8rem;
`;

const MovieListItem = (props: Props) => {
  const releaseYear = props.movie.releaseDate;

  return (
    <MovieItemWrapper>
      {props.movie.imageUrl ? (
        <MovieImage src={props.movie.imageUrl} alt="Movie poster" />
      ) : (
        <NoImage />
      )}
      <MovieItemDesc>
        <MovieItemHeading>{props.movie.title}</MovieItemHeading>
        <MovieItemYear>{releaseYear}</MovieItemYear>
        <MovieItemAbout>{props.movie.about}</MovieItemAbout>
      </MovieItemDesc>
    </MovieItemWrapper>
  );
};

export default MovieListItem;
