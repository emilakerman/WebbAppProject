
import VideoPlayer from './VideoPlayer';
import video from "../assets/sample_mp4.mp4";
import { useEffect, useRef, useState } from 'react';
import { getAuth } from "firebase/auth";
import { getFirestore, doc, collection, getDocs } from 'firebase/firestore';

    const StreamMoviePage = () => {
    
    const [rentedMovies, setRentedMovies] = useState([]);
    const db = getFirestore();

    useEffect(() => {
      const getRentedMovies = async () => {
        const user = getAuth().currentUser;
        if (user) {
          const userRef = doc(db, "users", user.uid);
          const rentedMoviesRef = collection(userRef, "RentedMovies");
          const snapshot = await getDocs(rentedMoviesRef);
          const movies = snapshot.docs.map((doc) => doc.data());
          console.log(movies);
          setRentedMovies(movies);
        }
      };

      getRentedMovies();
    }, [db]);

    
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
                <li key = {movie.id}>
                  {movie.title}
                  <h4>Rented at : {movie.time}</h4>
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