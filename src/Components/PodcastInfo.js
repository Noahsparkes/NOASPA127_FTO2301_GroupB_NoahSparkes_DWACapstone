import React, { useState, useEffect } from 'react';

const PodcastList = ({ podcastInfo }) => {
  const [currentSeason, setCurrentSeason] = useState(0);
  const [favoriteEpisodes, setFavoriteEpisodes] = useState([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favoriteEpisodes');
    if (storedFavorites) {
      setFavoriteEpisodes(JSON.parse(storedFavorites));
    }
  }, []);

  const handleLoadMore = () => {
    setCurrentSeason((prevSeason) => prevSeason + 1);
  };

  const handleToggleFavorite = (episodeId) => {
    if (favoriteEpisodes.includes(episodeId)) {
      setFavoriteEpisodes(favoriteEpisodes.filter((id) => id !== episodeId));
    } else {
      setFavoriteEpisodes([...favoriteEpisodes, episodeId]);
    }
    localStorage.setItem('favoriteEpisodes', JSON.stringify(favoriteEpisodes));
  };

  return (
    <div className="podcast-info">
      {podcastInfo ? (
        <>
          <h2>Podcast Information</h2>
          <p>
            <strong>Title:</strong> {podcastInfo.title}
          </p>
          <p>
            <strong>Description:</strong> {podcastInfo.description}
          </p>
          {podcastInfo.seasons.slice(0, currentSeason + 1).map((season) => (
            <div key={season.season} className="season">
              <h3 className="season-title">Season {season.season}: {season.title}</h3>
              {season.image && <img className="season-image" src={season.image} alt={`Season ${season.season}`} />}
              {season.episodes.map((episode) => (
                <div key={episode.episode} className="episode">
                  <p className="episode-title">
                    <strong>Episode {episode.episode}:</strong> {episode.title}
                  </p>
                  <p className="episode-description">{episode.description}</p>
                  <button onClick={() => handleToggleFavorite(episode.episode)}>
                    {favoriteEpisodes.includes(episode.episode) ? 'Unfavorite' : 'Favorite'}
                  </button>
                  {/* Display the podcast mp3 file link */}
                  <audio className="audio-file" controls>
                    <source src={episode.file} type="audio/mpeg" />
                    Sorry. Your browser does not support the audio element.
                  </audio>
                </div>
              ))}
            </div>
          ))}
          {currentSeason < podcastInfo.seasons.length - 1 && (
            <button className="load-more-button" onClick={handleLoadMore}>
              Load More
            </button>
          )}
        </>
      ) : (
        <p>No podcast information available.</p>
      )}
    </div>
  );
};

export default PodcastList;
