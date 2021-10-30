import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faAngleLeft, faAngleRight, faPause } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

const Player = ({ audioRef, songInfo, setSongInfo, songs, setSongs, currentSong, isPlaying, setCurrentSong, setIsPlaying }) => {

    useEffect(() => {
        const newSongs = songs.map((sng) => {
            if (sng.id === currentSong.id) {
                return {
                    ...sng,
                    active: true
                }
            } else {
                return {
                    ...sng,
                    active: false
                }
            }
        })

        setSongs(newSongs);
    }, [currentSong])

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

    const skipTrackHandler = (dir) => {
        let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
        if (dir === 'skipforward') {
            setCurrentSong(songs[(currentIndex + 1) % songs.length])
        }
        if (dir === 'skipback') {
            if ((currentIndex - 1) === -1) {
                setCurrentSong(songs[songs.length - 1])
                return;
            }
            setCurrentSong(songs[(currentIndex - 1) % songs.length])
        }
    }

    return (
        <div className="player">
            <div className="time__control">
                <p>{getTime(songInfo.currentTime)}</p>
                <div className="track">
                    <input
                        min={0}
                        max={songInfo.duration || 0}
                        value={songInfo.currentTime}
                        type="range"
                        onChange={dragHandler}

                    />
                    <div className="animate--track"></div>
                </div>
                <p>{songInfo.duration ? getTime(songInfo.duration) : "0:00"}</p>
            </div>
            <div className="play__control">
                <FontAwesomeIcon
                    onClick={() => skipTrackHandler('skipback')}
                    className="skip__back"
                    size="2x"
                    icon={faAngleLeft}

                />
                <FontAwesomeIcon
                    className="play"
                    onClick={playSongHandler}
                    size="2x"
                    icon={!isPlaying ? faPlay : faPause}

                />
                <FontAwesomeIcon
                    onClick={() => skipTrackHandler('skipforward')}
                    className="skip__forward"
                    size="2x"
                    icon={faAngleRight}

                />
            </div>

        </div>
    )
}

export default Player;