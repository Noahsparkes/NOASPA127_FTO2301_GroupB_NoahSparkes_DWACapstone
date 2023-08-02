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

  return (
    <div className="favorites-list">
      <h2>Your Favorite's List</h2>
      {favoriteEpisodes.length > 0 ? (
        <ul>
          {favoriteEpisodes.map((episode) => (
            <li key={episode.episode}>
              <strong>Show Name:</strong> {episode.showName}
              <br />
              <strong>Season:</strong> {episode.season}  {/*check these!*/ }
              <br />
              <strong>Episode Number:</strong> {episode.episode}
            </li>
          ))}
        </ul>
      ) : (
        <p>No favorite episodes yet.</p>
      )}
    </div>
  );
};

export default FavoritesList;

{/*extended look at all of this snippet for improvement */}
