import React from 'react';

const PodcastInfo = ({ podcastInfo }) => {
  return (
    <div>
      {podcastInfo ? (
        <>
          <h2>Podcast Information</h2>
          <p>
            <strong>Title:</strong> {podcastInfo.title}
          </p>
          <p>
            <strong>Description:</strong> {podcastInfo.description}
          </p>
          {/* Display other podcast information from podcastInfo object */}
        </>
      ) : (
        <p>No podcast information available.</p>
      )}
    </div>
  );
};

export default PodcastInfo;
