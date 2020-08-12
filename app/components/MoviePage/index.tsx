import * as React from 'react';

import { Movie } from 'entities/Movie';

interface Props {
  movie: Movie;
}

const MoviePage = (props: Props) => {
  const releaseYear = props.movie.releaseDate;

  return (
    <article>
      <img src={props.movie.imageUrl} alt="movie poster" />
      <div className="movie-description">
        <h3>{props.movie.title}</h3>
        <div className="movie-year">{releaseYear}</div>
        <span className="movie-about">{props.movie.about}</span>
      </div>
    </article>
  );
};

export default MoviePage;
