import { useState, useEffect } from 'react';
import { getMovieList, searchMovie } from './api';

import './App.css';


function App() {
  const [popularMovies, setPopularMovies] = useState([]);
 
  const imageUrl = "https://image.tmdb.org/t/p/w500";
  
  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result);
    });
  }, []);


  console.log(popularMovies)

  const Search = async (q) => {
    if(q.length > 3){
      const query = await searchMovie(q)
      setPopularMovies(query.results)
    }
  };

  const PopularMovie = () => {
    return popularMovies.map((movie, i) => {
      return (
  
         <div className="movie-wrapper" key={i}>
         <div className="movie-title">{movie.title}</div>
         <img src={`${imageUrl}/${movie.poster_path}`} alt="" className="movie-image" />
         <div className="movie-date">Release Date : {movie.release_date}</div>
         <div className="movie-rate">{movie.vote_average}</div>
         </div>
      );
    });
  };


  return (
    <>
      <h1>Movie Database</h1>
      <input
        type="text"
        placeholder="Cari Film..."
        className="Search-movie"
        onChange={({ target }) => Search(target.value)}
      />

      <div className="movie-container">
        <PopularMovie></PopularMovie>
      </div>
    </>
  );
}

export default App;