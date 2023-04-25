import React from "react";
import MovieThumb from "./MovieThumb";
import { useState, useEffect } from "react";



const HomePage = (props) => {

    const apiURL = 'https://api.themoviedb.org/3/trending/movie/week?api_key=128373ab4341186161d282674c1d9e7b';
    const [movies, setMovies] = useState([]);

    const fetchMovies = async () => {
        const response = await fetch(apiURL);
        const data = await response.json();

        setMovies(data.results);
    }

    useEffect(() => {
        fetchMovies();
    }, []);

    return (
        <div id='movieContainer'>
            {movies.map((movie) => (
                <MovieThumb key={movie.id} movie={movie}/>
            ))};
        </div>
    )
}

export default HomePage;