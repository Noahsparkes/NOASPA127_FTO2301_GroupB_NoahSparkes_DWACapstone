import React, { useState, useEffect } from 'react';

const PodcastInfo = ({ podcastId }) => {
  const [podcastData, setPodcastData] = useState(null);

  useEffect(() => {
    const apiEndpoint = `https://podcast-api.netlify.app/id/${podcastId}/`;

    // Use Fetch API to retrieve JSON data
    fetch(apiEndpoint)
      .then(response => response.json())
      .then(json => {
        setPodcastData(json);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [podcastId]); // Add podcastId as a dependency to fetch when it changes

  return (
    <div>
      {podcastData ? (
        <>
          <h2>Podcast Information</h2>
          <p className="message box">
            {JSON.stringify(podcastData)}
          </p>
          {/* Display other podcast information as needed */}
        </>
      ) : (
        <p>Loading podcast information...</p>
      )}
    </div>
  );
};

export default PodcastInfo;
