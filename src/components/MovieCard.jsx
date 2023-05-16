import '.././App.css'
import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom'
import { getAuth } from "firebase/auth";
import { getFirestore, collection, addDoc, doc } from "firebase/firestore";
import { Link } from "react-router-dom"


const MovieCard = () => {
  const [user, setUser] = useState(null);//keeps track of the userobj

  useEffect(() => {
    //Checks for userchanges log in changes
    const auth = getAuth();
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user); 
    });
    return unsubscribe;
  }, []);

  const handleRentMovie = () =>{
    const auth = getAuth();
    const currentUser = auth.currentUser;

    if(!currentUser){
      alert("Please log in to rent!")
      return;
    }

    const movieData = {
      title: title,
      genre: genre,
      release_date: release_date,
      score: score
    };

    const db = getFirestore();
    const userRef = doc(db, "users", currentUser.uid);

    const rentedMoviesRef = collection(userRef, "shoppingCart");
    addDoc(rentedMoviesRef, movieData)
      .then(() => {
        alert("Movie added to cart!")
      })
      .catch((error) => {
        console.error("Error adding the movie ", error);
      });
  };

  const location = useLocation()
  let { title, release_date, img, genre, overview, score } = location.state

  switch (genre) {
    case 28:
      genre = "Action";
      break;
    case 12:
      genre = "Adventure";
      break;
    case 16:
      genre = "Animation";
      break;
    case 35:
      genre = "Comedy";
      break;
    case 80:
      genre = "Crime";
      break;
    case 99:
      genre = "Documentary";
      break;
    case 18:
      genre = "Drama";
      break;
    case 10751:
      genre = "Family";
      break;
    case 14:
      genre = "Fantasy";
      break;
    case 36:
      genre = "History";
      break;
    case 27:
      genre = "Horror";
      break;
    case 10402:
      genre = "Music";
      break;
    case 9648:
      genre = "Mystery";
      break;
    case 10749:
      genre = "Romance";
      break;
    case 878:
      genre = "Science Fiction";
      break;
    case 10770:
      genre = "TV Movie";
      break;
    case 53:
      genre = "Thriller";
      break;
    case 10752:
      genre = "War";
      break;
    case 37:
      genre = "Western";
      break;
    default:
      genre = "Unknown";
      break;
  }  
  return (
    <div className="outerContainer">
      <div className="movie-page">
        <div className="imageSection">
          <img src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${img}`} 
          alt="Image" onError={(e) => { e.target.onerror = null; e.target.src = 'https://i.imgur.com/rnnnNuu.png' }}/>
        </div>
        <div className="rightSection">
          <h2 className='movie-tagline'>{title}</h2>
          <p className='movie-info'>{overview}</p>
          <div className='genreReleaseContainer'>
            <h3>{genre}</h3>
            <h3>{release_date}</h3>
            <h3>{score}</h3>
          </div>

          {/* If user is logged in: Can rent. if not: Log in to rent */}
          {user ? (
            <div id="movieCardButtonContainer">
              <button className='button' onClick={handleRentMovie}>Rent & Watch Online</button>
            </div>
          ) : (
            <button>
              <Link to="/LogIn">Log in to rent</Link>
            </button>
          )}
          
        </div>
      </div>
    </div>
  );
}

export default MovieCard;