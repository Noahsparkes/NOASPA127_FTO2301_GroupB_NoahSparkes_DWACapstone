import React, { useState, useEffect } from 'react';

const PodcastSearch = ({ setSearchTerm }) => {
  const [myOptions, setMyOptions] = useState([]);

  useEffect(() => {
    getDataFromAPI();
  }, []);

  const getDataFromAPI = () => {
    console.log("Options Fetched from API");

    fetch('https://podcast-api.netlify.app/shows')
      .then((response) => response.json())
      .then((res) => {
        console.log(res.data);
        const podcastNames = res.data.map((podcast) => podcast.podcast_name);
        setMyOptions(podcastNames);
      })
      .catch((error) => {
        console.error("Error fetching data from API:", error);
      });
  };

  return (
    <div>
      <ul>
        {myOptions.map((podcastName, index) => (
          <li key={index}>{podcastName}</li>
        ))}
      </ul>
    </div>
  );
};

export default PodcastSearch;
