import React from "react";
import { useState, useEffect } from "react";
import '.././App.css'
import { Link } from "react-router-dom";

const MovieThumb = ({movie}) => {

        const [isPressed, setIsPressed] = useState(false);
      
        let timeoutId;
      
        const handleTouchStart = () => {
          timeoutId = setTimeout(() => {
            setIsPressed(true);
          }, 1000); // change this value to adjust the duration of the long press
        };
      
        const handleTouchEnd = () => {
          clearTimeout(timeoutId);
          setIsPressed(false);
        };
    

    return (
        <div       
        className='movie'
        // className={isPressed ? 'movieDynamic' : 'movie'}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}>
            <div>
                <p></p>
            </div>
            <div>
            <Link to={`/movies/${movie.id}`} state={{ title: movie.title, release_date: movie.release_date, 
                                                    img: movie.backdrop_path, genre: movie.genre_ids[0], 
                                                    overview: movie.overview, score: movie.vote_average }}>
                <img 
                src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.backdrop_path}`} 
                alt='Movie Image'
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://i.imgur.com/rnnnNuu.png' }}
                />
            </Link>
            </div>
            <div>
                <h3>{movie.title}</h3>
                <span>{movie.release_date}</span>
            </div>
        </div>
    )
}

export default MovieThumb;