import '.././App.css'
import React from "react";


const MovieCard = () => {
  return (
    <div className="outerContainer">
      <div className="movie-page">
        <div className="imageSection">
          <img src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/vn1pWmu9G95wpapITYjhdKKcrvD.jpg" alt="Image"/>
        </div>
        <div className="rightSection">
          <h2 className='movie-tagline'>Movie Title 2023</h2>
          <p className='movie-info'>Longer movie description about some stuff that I probablby wont read bit ts good to put in the code anyway I think.</p>
          <h3>Genre</h3>
          <h3>Release date</h3>
          <h3>Average rating</h3>
          <button>Rent & Watch Online</button>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;