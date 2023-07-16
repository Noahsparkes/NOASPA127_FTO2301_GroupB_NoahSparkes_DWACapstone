import React, { useEffect } from 'react';
import { getPodcast } from './api.js';

const PodcastList = () => {
  useEffect(() => {
    getPodcast();
  }, []);

  return (
    <div>
      <button id="getPodcast">Show Podcasts</button>
      <div id="output"></div>
    </div>
  );
};

export default PodcastList;
