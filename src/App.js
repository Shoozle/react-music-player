import './styles/app.scss';

import Player from './components/Player';
import Song from './components/Song';
import data from './util';
import { useRef, useState } from 'react';
import Library from './components/Library';
import Nav from './components/Nav';

function App() {
  //Array returned from data set to state
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[1]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0
  })

  const audioRef = useRef(null);

  const timeUpdateHandler = (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({
      ...songInfo, currentTime, duration
    })
  }

  return (
    <div className="App">
      <Nav />
      <Library 
        audioRef={audioRef} 
        setCurrentSong={setCurrentSong} 
        songs={songs} 
        isPlaying={isPlaying} 
        setSongs={setSongs}
          
        />
      <Song isPlaying={isPlaying} setIsPlaying={setIsPlaying} currentSong={currentSong} />
      <Player 
        songInfo={songInfo} 
        setSongInfo={setSongInfo} 
        audioRef={audioRef} 
        isPlaying={isPlaying} 
        setIsPlaying={setIsPlaying} 
        currentSong={currentSong} 

        />
      <audio
        onLoadedMetadata={timeUpdateHandler}
        onTimeUpdate={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}>

      </audio>
    </div>
  );
}

export default App;
