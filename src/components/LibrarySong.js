const LibrarySong = ({ song, songs, setCurrentSong, audioRef, isPlaying, setSongs }) => {



    const songSelectHandler = () => {
        setCurrentSong(song);

        const newSongs = songs.map((sng) => {
            if (sng.id === song.id) {
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

        setSongs(newSongs)

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
        <div onClick={songSelectHandler} className={`librarySong ${song.active ? 'selected' : ''}`}>
            <img src={song.cover} alt={song.name} />
            <div className="description">
                <h2>{song.name}</h2>
                <h3>{song.artists.join(', ')}</h3>
            </div>

        </div>
    )
}

export default LibrarySong;