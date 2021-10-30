import LibrarySong from "./LibrarySong"

const Library = ({ songs, setCurrentSong, audioRef, isPlaying }) => {

    const librarySongs = songs.map(song => 
        <LibrarySong 
            key={song.id} 
            song={song} 
            setCurrentSong={setCurrentSong}
            songs={songs}
            audioRef={audioRef}
            isPlaying={isPlaying}
        />
    )

    console.table(songs)

    return (
        <div className="library">
            <h2>Library</h2>
            <div className="library__songs">
                {librarySongs}
            </div>
        </div>
    )

}

export default Library