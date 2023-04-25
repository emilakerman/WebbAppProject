import React from "react";
import { useState, useEffect } from "react";
import '.././App.css'


const MovieThumb = () => {
    return (
        <div className='movie'>
            <div>
                <p>year or something</p>
            </div>
            <div>
                <img src={'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/mIBCtPvKZQlxubxKMeViO2UrP3q.jpg'} alt='Movie title'/>
            </div>
            <div>
                <h3>title test</h3>
                <span>genre test</span>
            </div>
        </div>
    )
}

export default MovieThumb;