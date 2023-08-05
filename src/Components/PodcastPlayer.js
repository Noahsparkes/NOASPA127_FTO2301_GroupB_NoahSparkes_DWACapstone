import React, { useEffect, useRef, useState } from 'react';

const PodcastPlayer = ({ episode }) => {
  const audioRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [saveTimeout, setSaveTimeout] = useState(null);

  useEffect(() => {
    // Load the audio file and set the current time if available in local storage
    const storedPlaybackPosition = localStorage.getItem(`podcast_${episode.id}`);
    if (storedPlaybackPosition) {
      setCurrentTime(parseFloat(storedPlaybackPosition));
    }
  }, [episode.id]);

  useEffect(() => {
    const savePlaybackPosition = () => {
      // Save the current playback position to local storage
      localStorage.setItem(`podcast_${episode.id}`, currentTime);
    };

    const audioElement = audioRef.current;

    const timeUpdateHandler = () => {
      // Update the current time state every time the audio time is updated
      setCurrentTime(audioElement.currentTime);

      // Clear the previous timeout
      if (saveTimeout) {
        clearTimeout(saveTimeout);
      }

      // Set a new timeout to save the playback position after 10 seconds
      setSaveTimeout(setTimeout(savePlaybackPosition, 10000));
    };

    audioElement.addEventListener('timeupdate', timeUpdateHandler);

    return () => {
      audioElement.removeEventListener('timeupdate', timeUpdateHandler);
      // Save the final playback position when the component unmounts
      savePlaybackPosition();
    };
  }, [currentTime, episode.id, saveTimeout]);

  return (
    <div>
      <audio ref={audioRef} controls>
        <source src={episode.audioUrl} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default PodcastPlayer;
