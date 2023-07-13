import React, { useEffect } from 'react';
import { getPodcast } from './api.js';
import the css here Bro
import 

const App = () => {
  useEffect(() => {
    getPodcast();
  }, []);

  return (
    <div>
      <h1>hello World</h1>
      <div id="output"></div>
      <button id="getPodcast" onClick={getPodcast}>Get Podcast</button>
    </div>
  );
};

export default App;
