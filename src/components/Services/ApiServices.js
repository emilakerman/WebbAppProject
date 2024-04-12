
// Method to fetch movies from the api.
export const fetchMovies = async (apiURL) => {
    
    const response = await fetch(apiURL);
    const data = await response.json();

    return data.results;
}
// Method that deals with searching for movies.
export const handleMovieSearch = async (searchAPI, searchKeyword) => {
    const response = await fetch(`${searchAPI}&query=${searchKeyword}`);
    const data = await response.json();

    return data.results;
}