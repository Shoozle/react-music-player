import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faAngleLeft, faAngleRight, faPause } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import { useState } from "react";

const Player = ({currentSong, isPlaying, setIsPlaying}) => {

    const audioRef = useRef(null);
    const [songInfo, setSongInfo] = useState({
        currentTime: 0,
        duration: 0
    })

    const playSongHandler = (e) => {
        const audio = audioRef.current;
        if (isPlaying) {
            audio.pause();
            setIsPlaying(!isPlaying)
        } else {
            audio.play();
            setIsPlaying(!isPlaying)
        }
    }

    const timeUpdateHandler = (e) => {
        const currentTime = e.target.currentTime;
        const duration = e.target.duration;
        setSongInfo({
            ...songInfo, currentTime, duration
        })
    }

    const getTime = (time) => {
        return (
            `${Math.floor(time / 60)}:${("0" + Math.floor(time % 60)).slice(-2)}`
        )
    }

    const dragHandler = (e) => {
        const audio = audioRef.current;
        const currentTime = e.target.value;
        audio.currentTime = currentTime;
        setSongInfo({
            ...songInfo,
            currentTime
        })
    }

    return (
        <div className="player">
            <div className="time__control">
                <p>{getTime(songInfo.currentTime)}</p>
                <input 
                    min={0} 
                    max={songInfo.duration} 
                    value={songInfo.currentTime} 
                    type="range" 
                    onChange={dragHandler}
                    
                    />
                <p>{getTime(songInfo.duration)}</p>
            </div>
            <div className="play__control">
                <FontAwesomeIcon className="skip__back" size="2x" icon={faAngleLeft}/>
                <FontAwesomeIcon 
                    className="play" 
                    onClick={playSongHandler} 
                    size="2x" 
                    icon={!isPlaying ? faPlay : faPause}
                        
                    />
                <FontAwesomeIcon className="skip__forward" size="2x" icon={faAngleRight}/>
            </div>
            <audio 
                onLoadedMetadata={timeUpdateHandler} 
                onTimeUpdate={timeUpdateHandler} 
                ref={audioRef} 
                src={currentSong.audio}>

                </audio>
        </div>
    )
}

export default Player;