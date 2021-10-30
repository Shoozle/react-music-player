const LibrarySong = ({ song, songs, setCurrentSong, audioRef, isPlaying, setSongs }) => {

    const songSelectHandler = async () => {
        await setCurrentSong(song);

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