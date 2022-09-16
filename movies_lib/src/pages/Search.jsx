import React, { useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";
import { Link, useSearchParams } from "react-router-dom";
import johnTravoltaGif from "../img/john-travolta-GIF.gif";
import Loading from "../components/Loading";
import MovieCard from "../components/MovieCard";
import "../Styles/pages/MovieGrid.css";



const searchUrl = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

export default function Search() {
  const [searchParams] = useSearchParams();

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const query = searchParams.get(`q`);

  const getSearchedMovies = async (url) => {
    setLoading(true)
    const response = await fetch(url);
    const data = await response.json();
    setMovies(data.results);
    setLoading(false)
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
        {loading && <Loading />}
        {movies.length === 0 && (
          <div className="not-found-page">
            <div className="error-message">
              <h2>Nenhum filme encontrado</h2>
            </div>
          <Link to="/">
            Voltar para Home <FaHome />
          </Link>
          <img src={johnTravoltaGif} alt="john travolta gif" />
        </div>
        )}
        {movies &&
          movies.map((movie) => <MovieCard movie={movie} key={movie.id} />)}
      </div>
    </div>
  );
}
