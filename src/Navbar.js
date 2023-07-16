import React from 'react';
import searchIcon from './search.svg';

const Navbar = ({ searchTerm, setSearchTerm }) => {
  return (
    <nav className="navigation">
      <div className="search">
        <input
          placeholder="Search for Podcasts"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={searchIcon}
          className="search-img"
          alt="search"
          onClick={() => {}}
        />
      </div>
      <ul className="navbar">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#listen">Listen</a>
        </li>
        <li>
          <a href="#signup">Sign up</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
