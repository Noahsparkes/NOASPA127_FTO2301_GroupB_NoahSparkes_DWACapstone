// Navbar.js
import React, { useState } from 'react';
import searchIcon from '/Users/noah/Dynamic Web Apps/dwa-project23/src/images/search.svg';
import SearchFilter from './SearchFilter'; // Import the SearchFilter component

const Navbar = ({ data, setSearchTerm }) => { // Receive the 'data' and 'setSearchTerm' props
  const [searchTerm, setSearchTermLocal] = useState(''); // Local state for search term

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTermLocal(value); // Update local state for search term
    setSearchTerm(value); // Pass the search term back to App.js using the prop 'setSearchTerm'
  };

  return (
    <nav className="navigation">
      <div className="search">
        <input
          placeholder="Search for Podcasts"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <img
          src={searchIcon}
          className="search-img"
          alt="search"
          onClick={() => {}}
        />
      </div>
      {/* Pass the data and searchTerm props to the SearchFilter component */}
      <SearchFilter data={data} searchTerm={searchTerm} />
      <ul className="navbar">
        <li>
          <a href="#hero-banner">Home</a>
        </li>
        <li>
          <a href="#listen">Listen</a>
        </li>
        <li>
          <a href="#footer">Sign up</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
