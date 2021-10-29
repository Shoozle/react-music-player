import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";

const Player = ({currentSong, isPlaying, setIsPlaying}) => {

    const audioRef = useRef(null);

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

    return (
        <div className="player">
            <div className="time__control">
                <p>Start Time</p>
                <input type="range" />
                <p>End Time</p>
            </div>
            <div className="play__control">
                <FontAwesomeIcon className="skip__back" size="2x" icon={faAngleLeft}/>
                <FontAwesomeIcon className="play" onClick={playSongHandler} size="2x" icon={faPlay}/>
                <FontAwesomeIcon className="skip__forward" size="2x" icon={faAngleRight}/>
            </div>
            <audio ref={audioRef} src={currentSong.audio}></audio>
        </div>
    )
}

export default Player;