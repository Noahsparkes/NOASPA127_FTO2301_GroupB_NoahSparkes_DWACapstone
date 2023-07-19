import {useState, useEffect } from "react";

export default function Definition() {
  const [word, setWord] = useState();

  
  useEffect(() =>{
    fetch('https://podcast-api.netlify.app/shows')
        .then((response) => response.json());
        .then((data)=>{

            console.log(data)
        });
  }, []);

  return <p>Here is the definition</p>
}


/* -
-Use the  tutorials/articles to try and create a new seperate page on site
to display info.

-look at tutorial in notion to traverse through data
that is already displaying in the google dev tools

-see if you can use same page but display dynamic info on each podcast!*/
