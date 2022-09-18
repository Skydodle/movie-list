import React from 'react';

var Search = function({value, handleInput, searchMovie}) {
  return (
    <div className="search-bar form-inline">
      <input
      id='search'
      type='text'
      className="form-control"
      value={value}
      onChange={handleInput}
      placeholder="Search movies..."
      />
      <button className="btn" onClick={searchMovie}>
        Check
      </button>
  </div>
  )
}

export default Search;