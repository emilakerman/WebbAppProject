import React from "react";
import MovieThumb from "./MovieThumb";
import { useState, useEffect } from "react";
import  Searchbar from './Searchbar';
import { getAuth, onAuthStateChanged } from "firebase/auth";



const HomePage = (props) => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
         if (user) {
         // User is signed in
         const uid = user.uid;

         user.providerData.forEach((profile) => {
         console.log("  Email: " + profile.email);
         // console.log("  Photo URL: " + profile.photoURL);
         // TODO: Display user name and stuff ?
         })
         
         } else {
         // User is signed out
         // ...
        }
});

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
        <div>
            <Searchbar/>
       
        <div id='movieContainer'>
            {movies.map((movie) => (
                <MovieThumb key={movie.id} movie={movie}/>
            ))};
        </div>
        </div>
    )
}

export default HomePage;