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
    <div className="input-container">
        <input 
            type="text" 
            className="input-field" 
            placeholder="Search for movies..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}/>
        <img 
            onClick={() => handleMovieSearch(searchTerm)} 
            src="https://cdn-icons-png.flaticon.com/512/3917/3917754.png" 
            alt="Search" 
            className="search-icon"/>
    </div>
  );
};

export default Searchbar;
