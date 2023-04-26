import { useEffect } from "react";
import { useState } from "react";


const VideoPlayer = (videoContent) => {
    const [playing, setPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [speed, setSpeed] = useState(1);
    const [muted, setMuted] = useState(false);

    const togglePlay = () => {  
        //play/pause
        setPlaying(!playing);
    };

    useEffect(() => {
        //If playing, pause and if paused, play.
        playing ? videoContent.current.play() : videoContent.current.pause();
    }, [playing, videoContent]);

    const handleOnTimeUpdate = () => {
        //video progressbar
        const progress = (videoContent.current.currentTime / videoContent.current.duration) * 100;
        setProgress(progress);
    };

    const handleVideoProgress = (event) => {
        //Makes it possible to manually change the progressbar of the video.
        const manualChange = Number(event.target.value);
        videoContent.current.currentTime = (videoContent.current.duration / 100) * manualChange;
        setProgress(manualChange);
    };

    const handleVideoSpeed = (event) => {
        //Change the video playing speed.
        const speed = Number(event.target.value);
        videoContent.current.playbackRate = speed;
        setSpeed(speed);
    };

    const toggleMute = () => {
        //mute/unmute
        setMuted(!muted);
    };

    useEffect(() => {
         muted ? (videoContent.current.muted = true) : (videoContent.current.muted = false);
        
    }, [muted, videoContent]);

    return {
        playing,
        progress,
        speed,
        muted,
        togglePlay,
        handleOnTimeUpdate,
        handleVideoProgress,
        handleVideoSpeed,
        toggleMute
    };
   
};

export default VideoPlayer;