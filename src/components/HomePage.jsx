import React from "react";
import MovieThumb from "./MovieThumb";
import { useState, useEffect } from "react";
import  Searchbar from './Searchbar';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Link } from "react-router-dom"
import '.././App.css';

import { fetchMovies } from "./Services/ApiServices";



const HomePage = (props) => {


    const [apiURL, setapiURL] = useState('https://api.themoviedb.org/3/trending/movie/day?api_key=128373ab4341186161d282674c1d9e7b');
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const runFetch = async () => {
            setMovies(await fetchMovies(apiURL));
          };
        runFetch();
    }, [apiURL]);

    const genreToApiUrl = {
        trending: 'https://api.themoviedb.org/3/trending/movie/day?api_key=128373ab4341186161d282674c1d9e7b',
        comedy: 'https://api.themoviedb.org/3/discover/movie?api_key=128373ab4341186161d282674c1d9e7b&with_genres=35&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&vote_count.gte=100&vote_average.gte=5&language=en-US&region=US&release_date.lte=2023-05-02&release_date.gte=1900-01-01&with_original_language=en',
        action: 'https://api.themoviedb.org/3/discover/movie?api_key=128373ab4341186161d282674c1d9e7b&with_genres=28&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&vote_count.gte=100&vote_average.gte=5&language=en-US&region=US&release_date.lte=2023-05-02&release_date.gte=1900-01-01&with_original_language=en',
        drama: 'https://api.themoviedb.org/3/discover/movie?api_key=128373ab4341186161d282674c1d9e7b&with_genres=18&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&vote_count.gte=100&vote_average.gte=5&language=en-US&region=US&release_date.lte=2023-05-02&release_date.gte=1900-01-01&with_original_language=en',
        horror: 'https://api.themoviedb.org/3/discover/movie?api_key=128373ab4341186161d282674c1d9e7b&with_genres=27&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&vote_count.gte=100&vote_average.gte=5&language=en-US&region=US&release_date.lte=2023-05-02&release_date.gte=1900-01-01&with_original_language=en',
        scifi: 'https://api.themoviedb.org/3/discover/movie?api_key=128373ab4341186161d282674c1d9e7b&with_genres=878&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&vote_count.gte=100&vote_average.gte=5&language=en-US&region=US&release_date.lte=2023-05-02&release_date.gte=1900-01-01&with_original_language=en',
      };
      
      const changeList = (genre) => {
        const apiUrl = genreToApiUrl[genre];
        if (apiUrl) {
          setapiURL(apiUrl);
        } else {
          console.log("error");
        }
      };
      
    const [isPressed, setIsPressed] = useState(false);
      
    let timeoutId;
  
    const handleTouchStart = () => {
      timeoutId = setTimeout(() => {
        setIsPressed(true);
      }, 1000); // change this value to adjust the duration of the long press
    };
    const handleTouchEnd = () => {
        import('.././DynamicCss.css'); //changes stylesheet while longpress!!! working
        clearTimeout(timeoutId);
        setIsPressed(false);
    };

    return (
        <div className="homepageBG">
            <Searchbar />
            <div className="button-container">
                <button onClick={() => changeList('trending')}className="button">Trending</button>
                <button onClick={() => changeList('comedy')}className="button">Comedy</button>
                <button onClick={() => changeList('action')}className="button">Action</button>
                <button onClick={() => changeList('drama')}className="button">Drama</button>
                <button onClick={() => changeList('horror')}className="button">Horror</button>
                <button onClick={() => changeList('scifi')}className="button">Sci-Fi</button>
            </div>
            <div     
        id={isPressed ? 'movieContainer' : 'movieContainer'}
        // onTouchStart={handleTouchStart}
        // onTouchEnd={handleTouchEnd}
        >
                {movies.map((movie) => (
                    <MovieThumb key={movie.id} movie={movie}/>
                ))}
            </div>
        </div>
    )
}

export default HomePage;