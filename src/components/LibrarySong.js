const LibrarySong = ({ song, songs, setCurrentSong, audioRef, isPlaying }) => {

    const songSelectHandler = () => {
        setCurrentSong(song)
        if (isPlaying) {
            const playPromise = audioRef.current.play();
            if (playPromise !== undefined) {
                playPromise.then((audio) => {
                    audioRef.current.play();
                })
            }
        }
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