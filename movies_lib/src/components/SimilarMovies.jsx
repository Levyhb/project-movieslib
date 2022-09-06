import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom';
import Loading from './Loading';
import MovieCard from './MovieCard';

const moviesUrl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

export default function SimilarMovies() {
  const { id } = useParams();
  const [similarMovies, setSimilarMovies] = useState([])

  const getSimilarMovies = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setSimilarMovies(data.results);
  }

  useEffect(() => {
    const allSimilarMovies = `${moviesUrl}${id}/similar?${apiKey}`
    getSimilarMovies(allSimilarMovies)
  }, []);

  return (
    <>
    {similarMovies.length === 0 && <Loading />}
      {similarMovies && similarMovies.map((movie) => (
        <MovieCard movie={ movie } key={ movie.id} />
      ))}
    </>
  )
}
