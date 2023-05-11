
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from "./components/HomePage"
import AboutUsPage from "./components/AboutUsPage"
import axios from 'redaxios'; //external api fetch library (replacing fetch, this is more light weight apparently)
import './App.css';
import handleSubmit from './handles/handlesubmit';
import { useRef } from 'react';
import VideoPlayer from './components/VideoPlayer';
import video from "./assets/sample_mp4.mp4";
import MovieCard from './components/MovieCard';
import LogIn from './components/LogIn';
import ShoppingCart from './components/ShoppingCart';
import Payment from './components/Payment';







 

function App() {
  return (

    <>
      <Navbar />


    <div>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/movies/:movieId" element={<MovieCard/>}></Route>
        <Route path="/AboutUsPage" element={<AboutUsPage/>}></Route>
        <Route path="/LogIn" element={<LogIn />}></Route>
        <Route path="/ShoppingCart" element={<ShoppingCart/>}></Route>
        <Route path="/Payment" element={<Payment/>}></Route>
      </Routes>
    </div>
    </>
  );
    
}
  
  
    // const videoElement = useRef(null);
  // const {
  //   //all the variables and functions imported from the videoplayer.
  //   playing,
  //   speed,
  //   muted,
  //   progress,
  //   togglePlay,
  //   handleOnTimeUpdate,
  //   handleVideoProgress,
  //   handleVideoSpeed,
  //   toggleMute,
  // } = VideoPlayer(videoElement);

  //   <div className='container'>
  //     <div className='video-wrapper'>
  //       <video 
  //         src={video}
  //         ref={videoElement}
  //         onTimeUpdate={handleOnTimeUpdate}
  //       />
  //       <div className='controls'>
  //         <div className='actions'>
  //           <div onClick={togglePlay} className='play-pause'>
  //             {playing ? 'Pause' : 'Play'}
  //           </div>
  //         </div>
  //         <input 
  //           type="range"
  //           min="0"
  //           max="100"
  //           value={progress}
  //           onChange={(e) => handleVideoProgress(e)} 
  //         />
  //         <select
  //           className='velocity' 
  //           value={speed}
  //           onChange={(e) => handleVideoSpeed(e)}
  //         >
  //           <option value="0.50">0.50x</option>
  //           <option value="1">1x</option>
  //           <option value="1.25">1.25x</option>
  //           <option value="1.5">1.5x</option>
  //           <option value="2">2x</option>
  //         </select>
  //         <div onClick={toggleMute} className="mute-btn">
  //           {muted ? 'Unmute' : 'Mute'}
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
  












export default App
