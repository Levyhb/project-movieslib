import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import MovieCard from '../components/MovieCard';

const searchUrl = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

export default function Search() {
  const [searchParams] = useSearchParams();

  const [movies, setMovies] = useState([]);
  const query = searchParams.get("q")

  const getSearchedMovies = async (url) => {
    const response = await fetch(url);
    const data = await response.json();

    setMovies(data.results);
  }

  useEffect(() => {
    const searchWithQueryURL = `${searchUrl}?${apiKey}&query=${query}`;
    getSearchedMovies(searchWithQueryURL);
  }, [query]);


  return (
    <div className="container">
      <h2 className="title">Results for: <span className="query-text">{query}</span></h2>
      <div className="movie-container">
      {movies.length === 0 && <p>loading...</p>}
      {movies && movies.map((movie) => (
        <MovieCard movie={ movie } key={ movie.id} />
      ))}
      </div>
    </div>
  )
}
