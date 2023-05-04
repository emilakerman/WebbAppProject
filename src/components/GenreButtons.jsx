

const GenreButtons = (props) => {
    return (
        <div className="button-container">
            <button onClick={() => changeList('trending')}className="button">Trending</button>
            <button onClick={() => changeList('comedy')}className="button">Comedy</button>
            <button onClick={() => changeList('action')}className="button">Action</button>
            <button onClick={() => changeList('drama')}className="button">Drama</button>
            <button onClick={() => changeList('horror')}className="button">Horror</button>
            <button onClick={() => changeList('scifi')}className="button">Sci-Fi</button>
        </div>
    )
}
export default GenreButtons;