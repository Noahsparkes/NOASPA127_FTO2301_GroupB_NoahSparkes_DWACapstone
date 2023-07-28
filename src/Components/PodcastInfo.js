import React from 'react';

const PodcastInfo = ({ podcastInfo }) => {
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
          {podcastInfo.seasons.map((season) => (
            <div key={season.season} className="season">
              <h3 className="season-title">Season {season.season}</h3>
              {season.image && <img className="season-image" src={season.image} alt={`Season ${season.season}`} />}
              {season.episodes.map((episode) => (
                <div key={episode.episode} className="episode">
                  <p className="episode-title">
                    <strong>Episode {episode.episode}:</strong> {episode.title}
                  </p>
                  <p className="episode-description">{episode.description}</p>
                  {/* Display the podcast mp3 file link */}
                  <audio className="audio-file" controls>
                    <source src={episode.file} type="audio/mpeg" />
                    Sorry. Your browser does not support the audio element.
                  </audio>
                </div>
              ))}
            </div>
          ))}
        </>
      ) : (
        <p>No podcast information available.</p>
      )}
    </div>
  );
};

export default PodcastInfo;
