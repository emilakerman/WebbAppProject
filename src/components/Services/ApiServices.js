

///not using this yet, but leave it here for now

let searchAPI = `https://api.themoviedb.org/3/search/movie?query=${searchKeyword}&api_key=128373ab4341186161d282674c1d9e7b`;

const [searchedMovies, setSearchedMovies] = useState([]);
const [searchTerm, setSearchTerm] = useState('');


const searchMovies = async (searchKeyword) => {
    const response = await fetch(`${API_URL}&s=${searchKeyword}`);
    const data = await response.json();

    setMovies(data.Search);
}
export const searchTheseMovies = searchMovies(searchKeyword)