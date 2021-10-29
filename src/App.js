import './styles/app.scss';

import Player from './components/Player';
import Song from './components/Song';
import data from './util';
import { useState } from 'react';

function App() {
  //Array returned from data set to state
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);

  return (
    <div className="App">
      <Song currentSong={currentSong}/>
      <Player/>
    </div>
  );
}

export default App;
