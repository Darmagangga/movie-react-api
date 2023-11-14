import axios from "axios";

const apiKey = "3f238b9a5ec672998568ee63e8535a75";
const baseUrl = "https://api.themoviedb.org/3";
    
    // const apiKey = process.env.REACT_APP_APIKEY;
    // const baseUrl = import.meta.env.REACT_APP_BASEURL;
    
    console.log(apiKey)
    console.log(baseUrl)
    console.log(`${baseUrl}/movie/popular?api_key=${apiKey}`)

export const getMovieList = async () => {
  try {
    const movie = await axios.get(`${baseUrl}/movie/popular?page=1&api_key=${apiKey}`);
    return movie.data.results
  } catch (error) {
    console.error("Error fetching movie list:", error);
    throw error;
  }
};

export const searchMovie = async(q) => {
  const search = await axios.get(`${baseUrl}/search/movie?query=${q}&page=1&api_key=${apiKey}`)
  return search.data
};


