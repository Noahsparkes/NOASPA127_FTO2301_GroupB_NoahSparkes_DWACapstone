import React from "react";
import "./styles/styles.css";
import Navbar from "./Navbar.js";
import HeroBanner from "./HeroBanner.js";
import PodcastList from "./PodcastList.js";
import Newsletter from "./Newsletter";

const App = () => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Podcast Website</title>
        <script src="./scripts.js" defer></script>
        <link rel="stylesheet" href="/dwa-project/src/index.css" />
        {/*fonts*/}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@1,300&family=Roboto:wght@500;900&display=swap"
          rel="stylesheet"
        />
      </head>

      <body>
        <Navbar />
        <HeroBanner />
        <PodcastList />
        <Newsletter />
      </body>
    </html>
  );
};

export default App;
