import React, {useState} from "react";




const Searchbar = () => {

    const [searchQuery, setSearchQuery] = useState("");





    const handleMovieSearch = (movieResult) => {

        setSearchQuery(movieResult.target.value);

        

    };




    return (

        <div>

            <input

            type="text"

            placeholder="Search for movies..."

            value={searchQuery}

            onChange={handleMovieSearch}/>

            <p>You searched for: {searchQuery}</p>

        </div>

    );

};




export default Searchbar;