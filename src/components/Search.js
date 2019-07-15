import React from "react";

const Search = ({ searchfield, searchChange }) => {
  return (
    <div className="tc pa2">
      <input
        className="pa3 br3 mb4 bg-washed-yellow search"
        type="search"
        placeholder="Search..."
        onChange={searchChange}
      />
    </div>
  );
};

export default Search;
