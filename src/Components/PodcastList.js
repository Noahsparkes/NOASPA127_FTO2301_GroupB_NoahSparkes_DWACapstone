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
      <h2  id="listen">Podcasts</h2>
      {podcasts.length === 0 ? (
        <p>No podcasts found.</p>
      ) : (
        podcasts.map((preview) => (
          <div key={preview.id} className="podList">
            <h3 id="podList-title">{preview.title}</h3>
            <h3 id="podlist-season">SEASONS: {preview.seasons}</h3>
            <img className="podImage" src={preview.image} alt="" />
            <h4 id="podlist-genre">GENRE: {preview.genres}</h4>
            <button
              className="getPodcastData"
              data-id={preview.id}
              onClick={() => handlePodcastDataClick(preview.id)} // Pass the podcast id when the button is clicked
            >
              see more
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default PodcastList;

