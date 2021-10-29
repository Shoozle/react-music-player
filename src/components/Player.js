import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import { useState } from "react";

const Player = ({currentSong, isPlaying, setIsPlaying}) => {

    const audioRef = useRef(null);
    const [songInfo, setSongInfo] = useState({
        currentTime: null,
        duration: null
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

    return (
        <div className="player">
            <div className="time__control">
                <p>{getTime(songInfo.currentTime)}</p>
                <input type="range" />
                <p>{getTime(songInfo.duration)}</p>
            </div>
            <div className="play__control">
                <FontAwesomeIcon className="skip__back" size="2x" icon={faAngleLeft}/>
                <FontAwesomeIcon className="play" onClick={playSongHandler} size="2x" icon={faPlay}/>
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