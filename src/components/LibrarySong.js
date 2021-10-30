const LibrarySong = ({ song, songs, setCurrentSong }) => {

    const songSelectHandler = () => {
        setCurrentSong(song)
    }

    return (
        <div onClick={songSelectHandler} className="librarySong">
            <img src={song.cover} alt={song.name} />
            <div className="description">
                <h2>{song.name}</h2>
                <h3>{song.artists.join(', ')}</h3>
            </div>

        </div>
    )
}

export default LibrarySong;