import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Player = () => {
    return (
        <div className="player">
            <div className="time__control">
                <p>Star Time</p>
                <input type="range" />
                <p>End Time</p>
            </div>
            <div className="play__control">
                <FontAwesomeIcon className="skip__back" size="2x" icon={faAngleLeft}/>
                <FontAwesomeIcon className="play" size="2x" icon={faPlay}/>
                <FontAwesomeIcon className="skip__forward" size="2x" icon={faAngleRight}/>
            </div>
        </div>
    )
}

export default Player;