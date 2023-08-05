import React, { useState, useEffect } from 'react';

const PodcastList = ({ handlePodcastDataClick }) => {
  const [podcasts, setPodcasts] = useState([]);
  const [sortAsc, setSortAsc] = useState(true);
  const [sortDateAsc, setSortDateAsc] = useState(true);

  useEffect(() => {
    fetch('https://podcast-api.netlify.app/shows')
      .then((res) => res.json())
      .then((data) => setPodcasts(data))
      .catch((err) => console.log(err));
  }, []);

  const handleSort = () => {
    const sortedPodcasts = [...podcasts];
    sortedPodcasts.sort((a, b) => {
      if (sortAsc) {
        return a.title.localeCompare(b.title);
      } else {
        return b.title.localeCompare(a.title);
      }
    });
    setPodcasts(sortedPodcasts);
    setSortAsc(!sortAsc); // Toggle the sorting order
  };

  const handleSortByDate = () => {
    const sortedPodcasts = [...podcasts];
    sortedPodcasts.sort((a, b) => {
      if (sortDateAsc) {
        return new Date(a.updated) - new Date(b.updated);
      } else {
        return new Date(b.updated) - new Date(a.updated);
      }
    });
    setPodcasts(sortedPodcasts);
    setSortDateAsc(!sortDateAsc); // Toggle the sorting order
  };

  return (
    <div>
      <button id="AZ-btn" onClick={handleSort}>
        {sortAsc ? 'A-Z' : 'Z-A'}
      </button>
      <button id="date-btn" onClick={handleSortByDate}>
        {sortDateAsc ? 'Date Asc' : 'Date Desc'}
      </button>
      {podcasts.length === 0 ? (
        <p>No podcasts found.</p>
      ) : (
        podcasts.map((preview) => (
          <div key={preview.id} className="podList">
            <h3 id="podList-title">{preview.title}</h3>
            <h3 id="podlist-season">SEASONS: {preview.seasons}</h3>
            <img className="podImage" src={preview.image} alt="" />
            <h4 id="podlist-genre">GENRE: {preview.genres}</h4>
            <p>
              Last Update:{' '}
              {new Date(preview.updated).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
            <button
              className="getPodcastData"
              data-id={preview.id}
              onClick={() => handlePodcastDataClick(preview.id)}
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
