import LibrarySong from "./LibrarySong"

const Library = ({ songs }) => {

    const librarySongs = songs.map(song => <LibrarySong key={song.id} song={song} />)

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