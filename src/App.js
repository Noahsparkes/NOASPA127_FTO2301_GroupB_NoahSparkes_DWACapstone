import React, { useState, useEffect } from "react";
import "./styles/styles.css";
import Navbar from "./Navbar.js";
import HeroBanner from "./HeroBanner.js";
import PodcastList from "./PodcastList.js";
import PodcastInfo from "./PodcastInfo";
import Newsletter from "./Newsletter";
import ClipLoader from "react-spinners/ClipLoader";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [podcastInfo, setPodcastInfo] = useState(null);

  useEffect(() => {
    setLoading(true);
    // Simulate loading for 5 seconds (you can remove this setTimeout in your actual app)
    setTimeout(() => {
      setLoading(false);
    }, 5000);
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
            {/* Rest of the code... */}
          </head>
          <body>
            <Navbar />
            <HeroBanner />
            <PodcastList handlePodcastDataClick={handlePodcastDataClick} />
            {/* Pass the podcastInfo as a prop to PodcastInfo */}
            <PodcastInfo podcastInfo={podcastInfo} />
            <Newsletter />
          </body>
        </>
      )}
    </div>
  );
};

export default App;
