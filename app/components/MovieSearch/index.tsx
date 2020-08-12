import * as React from 'react';

const MovieSearch = () => {
  return (
    <div>
      <h1>find your movie</h1>
      <div>
        <input type="text" />
        <button type="button" className="primary">
          search
        </button>
      </div>
    </div>
  );
};

export default MovieSearch;
