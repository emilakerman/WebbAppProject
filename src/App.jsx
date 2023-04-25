
import './App.css';
import handleSubmit from './handles/handlesubmit';
import { useRef } from 'react';
import VideoPlayer from './components/VideoPlayer';
import video from "./assets/sample_mp4.mp4";


const App = () => {

  const videoElement = useRef(null);
  const {
    playerState,
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
              {playerState.isPlaying ? 'Pause' : 'Play'}
            </div>
          </div>
          <input 
            type="range"
            min="0"
            max="100"
            value={playerState.progress}
            onChange={(e) => handleVideoProgress(e)} 
          />
          <select
            className='velocity' 
            value={playerState.speed}
            onChange={(e) => handleVideoSpeed(e)}
          >
            <option value="0.50">0.50x</option>
            <option value="1">1x</option>
            <option value="1.25">1.25x</option>
            <option value="1.5">1.5x</option>
            <option value="2">2x</option>
          </select>
          <div onClick={toggleMute} className="mute-btn">
            {playerState.isMuted ? 'Unmute' : 'Mute'}
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
