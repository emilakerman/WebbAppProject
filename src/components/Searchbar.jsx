import React, { useEffect, useState } from "react";
import MovieThumb from "./MovieThumb";
import { handleMovieSearch } from "./Services/ApiServices";

const Searchbar = () => {

    let searchAPI = `https://api.themoviedb.org/3/search/movie?api_key=128373ab4341186161d282674c1d9e7b`;

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const clearAll = () => {
        setMovies([])
        setSearchTerm('')
    }
    const Content = () => {
        return (
            <div id='movieContainer'>
                {movies.map((movie) => (
                    <MovieThumb key={movie.id} movie={movie} />
                ))}
            </div>
        )
    }
    //Clear search
    let content = null;
    if (movies.length != 0) {
        content =
            <div>
                <div className="searchButtonContainer">
                    <button onClick={() => clearAll()} className="clearSearchButton">Clear search</button>
                </div>
                <Content />
            </div>
    }
    return (
        <>
            <div className="input-container">
                <input
                    type="text"
                    className="input-field"
                    placeholder="Search for movies..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} />
                <img
                    onClick={async () => setMovies(await handleMovieSearch(searchAPI, searchTerm))}
                    src="https://cdn-icons-png.flaticon.com/512/3917/3917754.png"
                    alt="Search"
                    className="search-icon" />
            </div>
            {content}
        </>
    );
};

export default Searchbar;
