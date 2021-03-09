import React from 'react';

const Search = ({ placeholder }) => (
  <input
    className="focus:outline-none focus:shadow-outline px-5 py-3"
    type="text"
    placeholder={placeholder}
  />
);

export default Search;
