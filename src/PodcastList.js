import React, { useState, useEffect } from 'react';

const PodcastList = ({ handlePodcastDataClick }) => {
  const [podcasts, setPodcasts] = useState([]);

  useEffect(() => {
    fetch('https://podcast-api.netlify.app/shows')
      .then((res) => res.json())
      .then((data) => setPodcasts(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2>Podcasts</h2>
      {podcasts.length === 0 ? (
        <p>No podcasts found.</p>
      ) : (
        podcasts.map((preview) => (
          <div key={preview.id} className="podList">
            <h3>{preview.title}</h3>
            <h3>SEASONS: {preview.seasons}</h3>
            <img className="podImage" src={preview.image} alt="" />
            <h4>GENRE: {preview.genre}</h4>
            <button className="getPodcastData" data-id={preview.id} onClick={handlePodcastDataClick}>
              see more
            </button>
          </div>
        ))
      )}
    </div>
  ); 
};

export default PodcastList;
