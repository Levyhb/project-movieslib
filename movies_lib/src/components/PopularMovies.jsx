import React, { useEffect, useState } from 'react'
import Loading from './Loading';
import MovieCard from './MovieCard';

const moviesUrl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

export default function PopularMovies() {
  const [popularMovies, setpopularMovies] = useState([])

  const getPopularMovies = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setpopularMovies(data.results);
  }

  useEffect(() => {
    const topRatedUrl = `${moviesUrl}popular?${apiKey}`
    getPopularMovies(topRatedUrl)
  }, []);

  return (
    <>
    {popularMovies.length === 0 && <Loading />}
      {popularMovies && popularMovies.map((movie) => (
        <MovieCard movie={ movie } key={ movie.id} />
      ))}
    </>
  )
}
