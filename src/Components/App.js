// App.js
import React, { useState, useEffect } from "react";
import "/Users/noah/Dynamic Web Apps/dwa-project23/src/styles/styles.css";
import Navbar from "./Navbar.js";
import HeroBanner from "./HeroBanner.js";
import PodcastList from "./PodcastList.js";
import PodcastInfo from "./PodcastInfo";
import Newsletter from "./Newsletter";
import ClipLoader from "react-spinners/ClipLoader";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [podcastInfo, setPodcastInfo] = useState(null);
  const [showPodcastInfo, setShowPodcastInfo] = useState(false);
  const [data, setData] = useState([]); // State to store the fetched data
  const [searchTerm, setSearchTerm] = useState(''); // State to handle search term

  useEffect(() => {
    setLoading(true);
    // Fetch data from the API endpoint
    fetchDataFromApi()
      .then((data) => {
        setData(data); // Set the fetched data in state
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  // Your function to fetch data from the API endpoint
  const fetchDataFromApi = async () => {
    try {
      const response = await fetch("YOUR_API_ENDPOINT_URL");
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error("Error fetching data from the API.");
    }
  };

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
            {/* Pass the 'data' and 'setSearchTerm' props to the Navbar component */}
            <Navbar data={data} setSearchTerm={setSearchTerm} />
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