import React, { useEffect } from 'react';

const API_URL = 'https://podcast-api.netlify.app/shows';

const App = () => {
  
  useEffect(() => {
    searchPodcasts("This Is Actually Happening");
  }, []);

  const searchPodcasts = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
  };

  return <h1>App</h1>;
};

export default App;
