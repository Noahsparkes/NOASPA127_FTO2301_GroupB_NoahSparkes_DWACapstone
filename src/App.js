import React, { useState, useEffect } from "react"; // Don't forget to import useState and useEffect
import "./styles/styles.css";
import Navbar from "./Navbar.js";
import HeroBanner from "./HeroBanner.js";
import PodcastList from "./PodcastList.js"; // api setup
import PodcastInfo from "./PodcastInfo"; // display podcast dets

import Newsletter from "./Newsletter"; // footer content
import ClipLoader from "react-spinners/ClipLoader"; // loadstate




const App = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <div className="loading">
      {loading ? (
        <ClipLoader color={"#ff781f"} loading={loading} size={100} />
      ) : (
        <>
          <head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Podcast Website</title>
            <script src="./scripts.js" defer></script>
            <link rel="stylesheet" href="/dwa-project/src/index.css" />
            {/*fonts*/}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link
              href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@1,300&family=Roboto:wght@500;900&display=swap"
              rel="stylesheet"
            />
          </head>
          <body>
            <Navbar />
            <HeroBanner />
            <PodcastList />
            <PodcastInfo />
            <Newsletter />
            

            
          </body>
        </>
      )}
    </div>
  );
};

export default App;
