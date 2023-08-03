import React, { useState, useEffect } from 'react';

const FavoritesList = () => {
  const [favoriteEpisodes, setFavoriteEpisodes] = useState([]);

  useEffect(() => {
    // Retrieve favorite episodes from local storage
    const storedFavorites = localStorage.getItem('favoriteEpisodes');
    if (storedFavorites) {
      setFavoriteEpisodes(JSON.parse(storedFavorites));
    }
  }, []);

  // Function to handle clearing all favorite episodes
  const clearFavorites = () => {
    setFavoriteEpisodes([]);
    localStorage.removeItem('favoriteEpisodes');
  };

  return (
    <div className="favorites-list">
      <h2>Your Favorites List</h2>
      {favoriteEpisodes.length > 0 ? (
        <>
          <ul>
            {favoriteEpisodes.map((episode) => (
              // Add a check for null before accessing properties
              episode && (
                <li key={episode.episode}>
                  <strong>Show Name:</strong> {episode.showName}
                  <br />
                  <strong>Season:</strong> {episode.season}
                  <br />
                  <strong>Episode Number:</strong> {episode.episode}
                </li>
              )
            ))}
          </ul>
          <button onClick={clearFavorites}>Clear Favorites</button>
        </>
      ) : (
        <p>No favorite episodes yet.</p>
      )}
    </div>
  );
};

export default FavoritesList;



//extended look at all of this snippet for improvement 