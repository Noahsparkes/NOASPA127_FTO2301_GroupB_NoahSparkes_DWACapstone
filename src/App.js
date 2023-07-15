import React, { useEffect,useState } from 'react';
import { getPodcast } from './api.js';
import './styles/styles.css';
import searchIcon from './search.svg'



const App = () => {
  useEffect(() => {
    getPodcast();
  }, []);
  
  const [searchTerm, setSearchTerm] = useState('');

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
        {/* Nav bar */}
        <nav className="navigation">

        <div className="search">
          <input
           placeholder= "Search for Podcasts" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}
          />
          <img src={searchIcon} className="search-img"
          alt='search'
          onClick={()=> {}}
          />
        </div>
          <ul className="navbar">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#listen">Listen</a>
            </li>
            <li>
              <a href="#signup">Sign up</a>
            </li>
          </ul>
          
        </nav>

        

        {/* Hero banner */}
        <div className="hero-banner"></div>

        <div className="h1">
          <h1>Welcome</h1>
          <p></p>
        </div>

        {/* API setup */}
        <button id="getPodcast">Show Podcasts</button>
        <div id="output"></div>

        {/* Footer */}
        <footer id="footer" className="footer">
          <h2 id="newsletter">Newsletter</h2>
          <p>Sign up for our newsletter. It's free!</p>
          <div className="form">
            <form
              action="https://formsubmit.co/noah.sparkes19@gmail.com"
              method="POST"
            >
              <p>
                <input type="text" name="name" required placeholder="Name*" />
              </p>
              <p>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email*"
                />
              </p>
              <input type="submit" value="Submit" id="submit" />
            </form>
          </div>
        </footer>
      </body>
    </html>



  );
};

export default App;