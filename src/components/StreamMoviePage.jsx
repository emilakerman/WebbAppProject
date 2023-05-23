
import VideoPlayer from './VideoPlayer';
import video from "../assets/sample_mp4.mp4";
import React, { useEffect, useRef, useState } from 'react';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, collection, getDocs, deleteDoc } from 'firebase/firestore';

const StreamMoviePage = () => {
  const [rentedMovies, setRentedMovies] = useState([]);
  const db = getFirestore();

  useEffect(() => {
    const getRentedMovies = async () => {
      const user = getAuth().currentUser;
      if (user) {
        const userRef = doc(db, 'users', user.uid);
        const rentedMoviesRef = collection(userRef, 'RentedMovies');
        const snapshot = await getDocs(rentedMoviesRef);
        const movies = snapshot.docs.map((doc) => doc.data());
        setRentedMovies(movies);
      }
    };

    getRentedMovies();
  }, [db]);

  useEffect(() => {
    console.log("Minute");
    const intervalId = setInterval(() => {
      rentedMovies.forEach((movie) => {
        console.log("foreach")
        checkMovieExpiry(movie);
      });
    }, 60000); // Run every minute (60000 milliseconds)

    return () => {
      clearInterval(intervalId); // Cleanup interval when component unmounts
    };
  }, [rentedMovies]);

  const checkMovieExpiry = async (movie) => {
    console.log("Expiry")
    const currentTimestamp = Date.now();
    const expiryTimestamp = movie.expiryDate.toMillis();
    console.log(currentTimestamp);
    console.log(expiryTimestamp);
  
    if (currentTimestamp > expiryTimestamp) {
      try {
        const user = getAuth().currentUser;
        if (user) {
          const userRef = doc(db, 'users', user.uid);
          const rentedMoviesRef = collection(userRef, 'RentedMovies');
          const querySnapshot = await getDocs(rentedMoviesRef);
  
          querySnapshot.forEach(async (doc) => {
            const movieData = doc.data();
            if (movieData.title === movie.title) {
              await deleteDoc(doc.ref);
              console.log(`Movie "${movie.title}" has expired and has been deleted from Firebase.`);
              setRentedMovies((prevMovies) =>
                prevMovies.filter((m) => m.title !== movie.title)
              );
            }
          });
        }
      } catch (error) {
        console.error('Error deleting expired movie:', error);
      }
    }
  };
  
  
  

    
    const videoElement = useRef(null);
    const {
     //all the variables and functions imported from the videoplayer.
     playing,
     speed,
     muted,
     progress,
     togglePlay,
     handleOnTimeUpdate,
     handleVideoProgress,
     handleVideoSpeed,
     toggleMute,
    } = VideoPlayer(videoElement);

   return(
     <div className='container'>
      
          <div className='RentedMovies'>
            <h3>Rented Movies:</h3>
            <ul>
              {rentedMovies.map((movie) => (
            <li key={movie.id}>
            {movie.title}
            <p>Rented at: {movie.rentedAt.toDate().toString()}</p>
            <p>Expires on: {movie.expiryDate.toDate().toString()}</p>
          </li>
              ))}
            </ul>
          </div>

       <div className='video-wrapper'>
         <video 
           src={video}
           ref={videoElement}
           onTimeUpdate={handleOnTimeUpdate}
         />
         <div className='controls'>
           <div className='actions'>
             <div onClick={togglePlay} className='play-pause'>
               {playing ? 'Pause' : 'Play'}
             </div>
           </div>
           <input 
             type="range"
             min="0"
             max="100"
             value={progress}
             onChange={(e) => handleVideoProgress(e)} 
           />
           <select
             className='velocity' 
             value={speed}
             onChange={(e) => handleVideoSpeed(e)}
           >
             <option value="0.50">0.50x</option>
             <option value="1">1x</option>
             <option value="1.25">1.25x</option>
             <option value="1.5">1.5x</option>
             <option value="2">2x</option>
           </select>
           <div onClick={toggleMute} className="mute-btn">
             {muted ? 'Unmute' : 'Mute'}
           </div>
         </div>
       </div>
     </div>
   );
};

   export default StreamMoviePage;