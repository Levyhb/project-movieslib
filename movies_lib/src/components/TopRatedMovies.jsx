import React, { useEffect, useState } from 'react'
import Loading from './Loading';
import MovieCard from './MovieCard';

const moviesUrl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

export default function TopRatedMovies() {
  const [topMovies, setTopMovies] = useState([])

  const getTopRatedMovies = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setTopMovies(data.results);
  }

  useEffect(() => {
    const topRatedUrl = `${moviesUrl}top_rated?${apiKey}`
    getTopRatedMovies(topRatedUrl)
  }, []);

  return (
    <>
    {topMovies.length === 0 && <Loading />}
      {topMovies && topMovies.map((movie) => (
        <MovieCard movie={ movie } key={ movie.id} />
      ))}
    </>
  )
}
