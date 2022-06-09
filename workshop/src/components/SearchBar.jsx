import React from 'react';

const SearchBar = (props) => {
  const { fetchGiphyAPI } = props;
  const handleChange = (e) => {
    fetchGiphyAPI(e.currentTarget.value);
  };

  return (
    <input onChange={handleChange} className="form-search form-control" type="text" placeholder="Search for gifs" />
  );
};

export default SearchBar;
