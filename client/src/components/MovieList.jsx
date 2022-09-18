import React from 'react';
import Movie from './Movie.jsx';

var MovieList = function({movieList}) {
  return  (
    <ul>
      {movieList.map((movie, index) => (
        <Movie movie={movie} id={index} />
      ))}
    </ul>
  )
}

export default MovieList;