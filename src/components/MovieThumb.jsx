import React from "react";
import { useState, useEffect } from "react";
import '.././App.css'
import { useNavigate } from "react-router-dom";
import Router from "router";

const MovieThumb = ({movie}) => {

    const navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/movies/${id}`);
      }

    return (
        <div className='movie'>
            <div>
                <p>Click for more info</p>
            </div>
            <div>
            <img 
                src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.backdrop_path}`} 
                alt='Movie Image'
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://i.imgur.com/rnnnNuu.png' }}
                onClick={() => handleClick(movie.id)} //click here on a movie in the list
                />
            </div>
            <div>
                <h3>{movie.title}</h3>
                <span>{movie.release_date}</span>
            </div>
        </div>
    )
}

export default MovieThumb;