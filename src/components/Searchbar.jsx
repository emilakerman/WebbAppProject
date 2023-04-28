import React, { useEffect, useState } from "react";

const Searchbar = () => {

    //emil

    let searchAPI = `https://api.themoviedb.org/3/search/movie?api_key=128373ab4341186161d282674c1d9e7b`;

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    
    
    const handleMovieSearch = async (searchKeyword) => {
        const response = await fetch(`${searchAPI}&query=${searchKeyword}`);
        const data = await response.json();
    
        console.log(data);
        setMovies(data.Search);
    }

    //end emil

//   const [searchQuery, setSearchQuery] = useState("");

//   const handleMovieSearch = (movieResult) => {
//     setSearchQuery(movieResult.target.value);
//   };

  return (
    <div className="searchContainer">
        <input
            className="searchBar"
            placeholder='Search for movies and tv shows here'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img 
            className="searchIcon"
            src="https://cdn-icons-png.flaticon.com/512/3917/3917754.png"
            alt="search"
            onClick={() => handleMovieSearch(searchTerm)}
        />
    </div>
  );
};

export default Searchbar;
