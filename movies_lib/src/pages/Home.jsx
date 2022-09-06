import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import MovieCard from '../components/MovieCard';
import './MovieGrid.css';

const moviesUrl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;


export default function Home() {

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
    <div className="container">
      <h2 className="title">Top Rated movies:</h2>
      <div className="movie-container">
      {topMovies.length === 0 && <p>loading...</p>}
      {topMovies && topMovies.map((movie) => (
        <MovieCard movie={ movie } key={ movie.id} />
      ))}
      </div>
    </div>
  )
}
