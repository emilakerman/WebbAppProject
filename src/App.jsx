import { useState, useEffect } from 'react';
import './App.css'
import axios from 'redaxios'; //external api fetch library (replacing fetch, this is more light weight apparently)

//Omdb api url
let apiURL = "http://www.omdbapi.com/?apikey=9875f2c9";

//TMD api key
//128373ab4341186161d282674c1d9e7b



// let title = "Batman"; //just using this now for static testing

const App = () => {

//   useEffect(() => {
//     fetchData(title);
//   }, []);

//   const fetchData = (title) => {
//     axios.get(`${apiURL}&s=${title}`)
//     .then((response) => {
//       for (const movie in response.data.Search) {
//         console.log(response.data.Search[movie].Title) //logs out a bunch of batman movies
//       }
//     })
//     .catch((error) => {
//       ///various error handling
//         if (error.response) {
//         console.log(error.response.data);
//         console.log(error.response.status);
//         console.log(error.response.headers);
//         } else if (error.request) {
//         console.log(error.request);
//         } else {
//         console.log('Error', error.message);
//         }
    
//     })
//     .finally(function () {
//         // always executed, not used right now
//     }); 
// }

  return(
    <h1>hej</h1>
  )
}

export default App
