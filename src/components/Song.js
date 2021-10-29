
const Song = ({currentSong}) => {
    return (
        <div className="song__container">
            <img src={currentSong.cover} />
            <h2>{currentSong.name}</h2>
            <h3>{currentSong.artists}</h3>
        </div>
    )
}

export default Song;