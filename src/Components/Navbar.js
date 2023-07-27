import React from 'react';
import searchIcon from '/Users/noah/Dynamic Web Apps/dwa-project23/src/images/search.svg';

const Navbar = ({ searchTerm, setSearchTerm }) => {
  return (
    <nav className="navigation">
      
      <div className="search">
        <input
          placeholder="Search for Podcasts"
          value={searchTerm}
         
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
