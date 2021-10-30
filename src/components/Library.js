import LibrarySong from "./LibrarySong"

const Library = ({ songs, setCurrentSong, audioRef, isPlaying, setSongs, libraryStatus }) => {

    const librarySongs = songs.map(song => 
        <LibrarySong 
            key={song.id} 
            song={song} 
            setCurrentSong={setCurrentSong}
            songs={songs}
            audioRef={audioRef}
            isPlaying={isPlaying}
            setSongs={setSongs}
        />
    )

    if (isPlaying) audioRef.current.play();
    
    return (
        <div className={`library ${libraryStatus ? 'active--library' : ''}`}>
            <h2>Library</h2>
            <div className="library__songs">
                {librarySongs}
            </div>
        </div>
    )

}

export default Library