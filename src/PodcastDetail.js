import React, { useState,useEffect } from 'react';

const PodcastDetail = ({ podcastId }) => {
  const [podcastData, setPodcastData] = useState(null);

  useEffect(() => {
    fetch(`https://podcast-api.netlify.app/id/${podcastId}`)
      .then((res) => res.json())
      .then((data) => setPodcastData(data))
      .catch((err) => console.log(err));
  }, [podcastId]);

  return (
    <div>
      {podcastData ? (
        <div>
          <h2>{podcastData.title}</h2>
          {/* Render other details of the podcast here */}
        </div>
      ) : (
        <p>Loading podcast details...</p>
      )}
    </div>
  );
};

export default PodcastDetail;
