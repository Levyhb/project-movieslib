import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import MovieCard from "./MovieCard";

const moviesUrl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

export default function UpcomingMovies() {
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  const getUpcomingMovies = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setUpcomingMovies(data.results);
  };

  useEffect(() => {
    const upcomingUrl = `${moviesUrl}upcoming?${apiKey}`;
    getUpcomingMovies(upcomingUrl);
  }, []);

  return (
    <>
      {upcomingMovies.length === 0 && <Loading />}
      {upcomingMovies &&
        upcomingMovies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
    </>
  );
}
