import React, { useState, useEffect } from "react";
import "./styles/styles.css";
import Navbar from "./Navbar.js"; // nav bar
import HeroBanner from "./HeroBanner.js"; // hero banner
import PodcastList from "./PodcastList.js"; // podcast list
import PodcastInfo from "./PodcastInfo"; // podcast info/details
import Newsletter from "./Newsletter"; // footer
import ClipLoader from "react-spinners/ClipLoader"; // loadstate

const App = () => {
  const [loading, setLoading] = useState(false);
  const [podcastInfo, setPodcastInfo] = useState(null);
  const [showPodcastInfo, setShowPodcastInfo] = useState(false); // State to control when to show podcast info

  useEffect(() => {
    setLoading(true);
    // Simulate loading for 3 seconds
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  // Define the handlePodcastDataClick function here
  const handlePodcastDataClick = (podcastId) => {
    setLoading(true); // Show loading state while fetching data

    // Fetch data from the second endpoint using the podcastId
    fetch(`https://podcast-api.netlify.app/id/${podcastId}/`)
      .then((response) => response.json())
      .then((data) => {
        setPodcastInfo(data); // Set the fetched data in state
        setLoading(false); // Hide loading state after fetching data
        setShowPodcastInfo(true); // Show podcast info after fetching data
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false); // Hide loading state if there's an error
      });
  };

  return (
    <div className="loading">
      {loading ? (
        <ClipLoader color={"#ff781f"} loading={loading} size={100} />
      ) : (
        <>
          <head>
            {/* Rest of the header... */}
          </head>
          <body>
            <Navbar />
            <HeroBanner className="hero-banner" />
            {/* Conditionally render PodcastList or PodcastInfo based on showPodcastInfo state */}
            {showPodcastInfo ? (
              <PodcastInfo podcastInfo={podcastInfo} />
            ) : (
              <PodcastList handlePodcastDataClick={handlePodcastDataClick} />
            )}
            <Newsletter />
          </body>
        </>
      )}
    </div>
  );
};

export default App;
