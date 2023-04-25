import { useEffect } from "react";
import { useState } from "react";


const VideoPlayer = (videoContent) => {
    const [playerState, setPlayerState] = useState({
        isPlaying : false,
        progress: 0,
        speed: 1,
        isMuted : false
    });

    const togglePlay = () => {
        setPlayerState({
            ...playerState,
            isPlaying : !playerState.isPlaying,
        });
    };

    useEffect(() => {
        //om den spelas så pausa annars spela första gången den skapas
        playerState.isPlaying ? videoContent.current.play() : videoContent.current.pause();
    }, [playerState.isPlaying, videoContent]);

    const handleOnTimeUpdate = () => {
        //video progressbar
        const progress = (videoContent.current.currentTime / videoContent.current.duration) * 100;
        setPlayerState({
            ...playerState,
            progress,
        });
    };

    const handleVideoProgress = (event) => {
        //så man kan ändra tid genom progressbaren
        const manualChange = Number(event.target.value);
        videoContent.current.currentTime = (videoContent.current.duration / 100) * manualChange;
        setPlayerState({
            ...playerState,
            progress: manualChange,
        });
    };

    const handleVideoSpeed = (event) => {
        //ändra hastigheten 1.0x = 1.25x tex
        const speed = Number(event.target.value);
        videoContent.current.playbackRate = speed;
        setPlayerState({
            ...playerState,
            speed,
        });
    };

    const toggleMute = () => {
        //stäng av / på ljudet
        setPlayerState({
            ...playerState,
            isMuted: !playerState.isMuted,
        });
    };

    useEffect(() => {
         playerState.isMuted ? (videoContent.current.muted = true) : (videoContent.current.muted = false);
        
    }, [playerState.isMuted, videoContent]);

    return {
        playerState,
        togglePlay,
        handleOnTimeUpdate,
        handleVideoProgress,
        handleVideoSpeed,
        toggleMute
    };
   
};

export default VideoPlayer;