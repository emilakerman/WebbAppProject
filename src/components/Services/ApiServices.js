/* new stuff from 20223-05-11 below */ 

export const fetchMovies = async (apiURL) => {
    
    const response = await fetch(apiURL);
    const data = await response.json();

    return data.results;
}