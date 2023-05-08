

const GenreButtons = (props) => {
    const [apiURL, setapiURL] = useState('https://api.themoviedb.org/3/trending/movie/day?api_key=128373ab4341186161d282674c1d9e7b');
    const [movies, setMovies] = useState([]);

    const fetchMovies = async () => {
        const response = await fetch(apiURL);
        const data = await response.json();

        setMovies(data.results);
    }

    useEffect(() => {
        fetchMovies();
    }, [apiURL]);

    const changeList = (genre) => {
        switch (genre) {
        case "trending":
            setapiURL('https://api.themoviedb.org/3/trending/movie/day?api_key=128373ab4341186161d282674c1d9e7b');
            break;
        case "comedy":
            setapiURL('https://api.themoviedb.org/3/discover/movie?api_key=128373ab4341186161d282674c1d9e7b&with_genres=35&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&vote_count.gte=100&vote_average.gte=5&language=en-US&region=US&release_date.lte=2023-05-02&release_date.gte=1900-01-01&with_original_language=en');
            break;
        case "action":
            setapiURL('https://api.themoviedb.org/3/discover/movie?api_key=128373ab4341186161d282674c1d9e7b&with_genres=28&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&vote_count.gte=100&vote_average.gte=5&language=en-US&region=US&release_date.lte=2023-05-02&release_date.gte=1900-01-01&with_original_language=en');
            break;
        case "drama":
            setapiURL('https://api.themoviedb.org/3/discover/movie?api_key=128373ab4341186161d282674c1d9e7b&with_genres=18&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&vote_count.gte=100&vote_average.gte=5&language=en-US&region=US&release_date.lte=2023-05-02&release_date.gte=1900-01-01&with_original_language=en');
            break;
        case "horror":
            setapiURL('https://api.themoviedb.org/3/discover/movie?api_key=128373ab4341186161d282674c1d9e7b&with_genres=27&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&vote_count.gte=100&vote_average.gte=5&language=en-US&region=US&release_date.lte=2023-05-02&release_date.gte=1900-01-01&with_original_language=en');
            break;
        case "scifi":
            setapiURL('https://api.themoviedb.org/3/discover/movie?api_key=128373ab4341186161d282674c1d9e7b&with_genres=878&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&vote_count.gte=100&vote_average.gte=5&language=en-US&region=US&release_date.lte=2023-05-02&release_date.gte=1900-01-01&with_original_language=en');
            break;
        default:
            console.log("no");
            break;
        }
    }
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