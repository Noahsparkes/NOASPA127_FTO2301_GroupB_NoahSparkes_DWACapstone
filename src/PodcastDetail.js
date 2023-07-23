import React from 'react'
import { useEffect } from 'react'
import { useState} from 'react'


function FetchDetails() {
  const [info, setInfo] = useState([])

  useEffect(() =>{
       fetch('https://podcast-api.netlify.app/shows')
       .then(response => response.json())
       .then(data => setInfo({data}) )
       .catch(err => console.log(err))
  }, [])

  return(

    <div>
      <h1>{info.title}</h1>
      <p>{info.description}</p>
      <p>{info.episodes}</p>
    </div>
  )
}


export default FetchDetails 