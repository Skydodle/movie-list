import React from 'react';

var Add = function({value, handleInput, addMovie}) {
  return (
    <div className="add-bar form-inline">
      <input
        id='add'
        type='text'
        className="form-control"
        value={value}
        onChange={handleInput}
        placeholder="Add Movie..."
      />
      <button className="btn" onClick={addMovie}>
        Add A Movie
      </button>
    </div>
  )
}

export default Add;