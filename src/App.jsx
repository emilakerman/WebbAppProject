import { useState, useEffect } from 'react';
import './App.css'
import axios from 'redaxios';

let apiURL = "http://www.omdbapi.com/?apikey=9875f2c9";

let title = "Batman";

const App = () => {

  useEffect(() => {
    fetchData(title);
  }, []);

  const fetchData = (title) => {
    axios.get(`${apiURL}&t=${title}`)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
        if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
        } else if (error.request) {
        console.log(error.request);
        } else {
        console.log('Error', error.message);
        }
    
    })
    .finally(function () {
        // always executed, not used right now
    }); 
}

  return(
    <h1>hej</h1>
  )
}

export default App
