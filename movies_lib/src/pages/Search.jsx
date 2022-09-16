import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Loading from "../components/Loading";
import MovieCard from "../components/MovieCard";
import "../Styles/pages/MovieGrid.css";

const searchUrl = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

export default function Search() {
  const [searchParams] = useSearchParams();

  const [movies, setMovies] = useState([]);
  const query = searchParams.get(`q`);

  const getSearchedMovies = async (url) => {
    const response = await fetch(url);
    const data = await response.json();

    setMovies(data.results);
  };

  useEffect(() => {
    const searchWithQueryURL = `https://api.themoviedb.org/3/search/movie?${apiKey}&query=${query}`;
    getSearchedMovies(searchWithQueryURL);
  }, [query]);

  return (
    <div className="container">
      <h2 className="title-search">
        Results for: <span className="query-text">{query}</span>
      </h2>
      <div className="container-grid">
        {movies.length === 0 && <Loading />}
        {movies &&
          movies.map((movie) => <MovieCard movie={movie} key={movie.id} />)}
      </div>
    </div>
  );
}
