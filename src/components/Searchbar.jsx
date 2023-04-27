import React, { useState } from "react";

const Searchbar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleMovieSearch = (movieResult) => {
    setSearchQuery(movieResult.target.value);
  };
  return (
    <div className="searchContainer">
      <input
        className="searchBar"
        type="text"
        placeholder="Search for movies..."
        value={searchQuery}
        onChange={handleMovieSearch}
      />
      {/* <p>You searched for: {searchQuery}</p> */}
    </div>
  );
};

export default Searchbar;
