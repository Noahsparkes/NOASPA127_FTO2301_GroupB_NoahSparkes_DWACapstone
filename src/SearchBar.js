import React from 'react';

const SearchBar = ({ handleSearch }) => {
  const handleChange = (event) => {
    handleSearch(event.target.value);
  };

  return (
    <div>
      <input type="text" placeholder="Search Podcasts" onChange={handleChange} />
    </div>
  );
};

export default SearchBar;
