import './styles/app.scss';

import Player from './components/Player';
import Song from './components/Song';
import data from './util';
import { useState } from 'react';

function App() {
  //Array returned from data set to state
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[1]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="App">
      <Song isPlaying={isPlaying} setIsPlaying={setIsPlaying} currentSong={currentSong}/>
      <Player isPlaying={isPlaying} setIsPlaying={setIsPlaying} currentSong={currentSong}/>
    </div>
  );
}

export default App;
