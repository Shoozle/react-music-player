import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faAngleLeft, faAngleRight, faPause } from "@fortawesome/free-solid-svg-icons";

const Player = ({ audioRef, songInfo, setSongInfo, currentSong, isPlaying, setIsPlaying }) => {

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
                    max={songInfo.duration || 0}
                    value={songInfo.currentTime}
                    type="range"
                    onChange={dragHandler}

                />
                <p>{getTime(songInfo.duration)}</p>
            </div>
            <div className="play__control">
                <FontAwesomeIcon className="skip__back" size="2x" icon={faAngleLeft} />
                <FontAwesomeIcon
                    className="play"
                    onClick={playSongHandler}
                    size="2x"
                    icon={!isPlaying ? faPlay : faPause}

                />
                <FontAwesomeIcon className="skip__forward" size="2x" icon={faAngleRight} />
            </div>

        </div>
    )
}

export default Player;