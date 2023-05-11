
//this one is for the static lists on the first page
export const fetchMovies = async (apiURL) => {
    
    const response = await fetch(apiURL);
    const data = await response.json();

    return data.results;
}
//this one is for search
export const handleMovieSearch = async (searchAPI, searchKeyword) => {
    const response = await fetch(`${searchAPI}&query=${searchKeyword}`);
    const data = await response.json();

    return data.results;
}