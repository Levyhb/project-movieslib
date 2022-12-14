import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import MovieCard from "./MovieCard";

const moviesUrl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

export default function NowPlayingMovies() {
  const [nowPlayingMovies, setnowPlayingMovies] = useState([]);

  const getnowPlayingMovies = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setnowPlayingMovies(data.results);
  };

  useEffect(() => {
    const topRatedUrl = `${moviesUrl}now_playing?${apiKey}`;
    getnowPlayingMovies(topRatedUrl);
  }, []);

  return (
    <>
      {nowPlayingMovies.length === 0 && <Loading />}
      {nowPlayingMovies &&
        nowPlayingMovies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
    </>
  );
}
