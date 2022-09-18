import React from 'react';


var Movie = function({movie}) {
  return <li className="movie" title={movie.title}> {movie.title}</li>
}

export default Movie;