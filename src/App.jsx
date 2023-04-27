
import { useState, useEffect } from 'react';
import './App.css'
import axios from 'redaxios'; //external api fetch library (replacing fetch, this is more light weight apparently)
import './App.css';
import handleSubmit from './handles/handlesubmit';
import { useRef } from 'react';
import VideoPlayer from './components/VideoPlayer';
import video from "./assets/sample_mp4.mp4";

//Omdb api url
let apiURL = "http://www.omdbapi.com/?apikey=9875f2c9";

//TMD api key
//128373ab4341186161d282674c1d9e7b



// let title = "Batman"; //just using this now for static testing

//const App = () => {

//   useEffect(() => {
//     fetchData(title);
//   }, []);

//   const fetchData = (title) => {
//     axios.get(`${apiURL}&s=${title}`)
//     .then((response) => {
//       for (const movie in response.data.Search) {
//         console.log(response.data.Search[movie].Title) //logs out a bunch of batman movies
//       }
//     })
//     .catch((error) => {
//       ///various error handling
//         if (error.response) {
//         console.log(error.response.data);
//         console.log(error.response.status);
//         console.log(error.response.headers);
//         } else if (error.request) {
//         console.log(error.request);
//         } else {
//         console.log('Error', error.message);
//         }
    
//     })
//     .finally(function () {
//         // always executed, not used right now
//     }); 
// }

//  return(
//    <h1>hej</h1>
//  )





const App = () => {

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

  return (
    <div className='container'>
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
  









/* Firebase test */

/*   const dataRef = useRef()
 
  const submithandler = (e) => {
    e.preventDefault()
    handleSubmit(dataRef.current.value)
    dataRef.current.value = ""
  }
return (
      <div className="App">
        <form onSubmit={submithandler}>
          <input type= "text" ref={dataRef} />
          <button type = "submit">Save</button>
        </form>
      </div>
    ); */
}

export default App
