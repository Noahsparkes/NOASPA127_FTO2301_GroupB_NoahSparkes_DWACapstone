/*import React,{useEffect,useState} from 'react';



const LoadState =()=> {
    const[post,setPost] =useState(null)
  useEffect(()=>{
   fetch('https://podcast-api.netlify.app/shows')
   .then(response=>response.json())
   .then(response=>{
    const{title}= response
    setPost(title)
   })
    },[])
    return (<>
    <h1>hello</h1>
    {post?post : "Loading..."}
    </>
    );
}


export default LoadState;*/

// loadstate far from working
// reference the api from api.js and intergrate it with thi logic.