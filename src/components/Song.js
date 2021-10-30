
const Song = ({currentSong}) => {
    return (
        <div className="song__container">
            <img src={currentSong.cover} alt={currentSong.song} />
            <h2>{currentSong.name}</h2>
            <h3>{currentSong.artists.join(', ')}</h3>
        </div>
    )
}

export default Song;