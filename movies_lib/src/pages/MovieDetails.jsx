import React, { useEffect, useState } from 'react';
import { Link, useParams, useSearchParams } from "react-router-dom";
import { BsFillFileEarmarkTextFill, BsGraphUp, BsHourglassSplit, BsWallet2 } from "react-icons/bs";
import MovieCard from '../components/MovieCard';
import "../Styles/pages/MovieDetails.css";
import { MdMovieCreation } from "react-icons/md"
import SimilarMovies from '../components/SimilarMovies';
import { AiOutlineRollback } from "react-icons/ai";

const moviesUrl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

export default function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState();

  // const [searchParams] = useSearchParams([]);
  // const query = searchParams.get('/')

  const getMovieDetails = async (url) => {
    const response = await fetch(url);
    const data = await response.json();

    setMovie(data);
  }

  const formatCurrency = (number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });
  };

  useEffect(() => {
    const movieDetailUrl = `${moviesUrl}${id}?${apiKey}`;
    getMovieDetails(movieDetailUrl)
  }, []);

  return (
    <div className="movie-page">
      {movie && (
        <div>
          <div className='movie-info'>
            <MovieCard movie={movie} showLink={false} />
            <p className='tagline'>{movie.tagline}</p>
            <div className='info'>
              <h3>
                <BsWallet2 /> Budget
              </h3>
              <p>{formatCurrency(movie.budget)}</p>
            </div>
            <div className="info">
              <h3>
                <BsGraphUp />  Revenue
              </h3>
              <p>{formatCurrency(movie.revenue)}</p>
            </div>
            <div className="info description">
              <h3>
                <BsHourglassSplit /> Durability
              </h3>
              <p>{movie.runtime} minutes</p>
            </div>
            <div className='info'>
              <h3>
                <BsFillFileEarmarkTextFill /> Description
              </h3>
              <p className="description">{movie.overview}</p>
            </div>
            <div className='info'>
              <h3>
                <MdMovieCreation /> Genre
              </h3>
              <div  className='genre'>{movie.genres.filter((e) => e.id).map((element) => (<p>{element.name}</p>)) }</div>
            </div>
          </div>
          <div className='container'>
            <h2 className='title similar-movie-title'>See others movies similiar to <span className='query-text'>{movie.title}</span></h2>
            <div className='container-grid similar-movies'>
              <SimilarMovies />
            </div>
            <h3 className='back-to-home'><Link to="/">Back to Home <AiOutlineRollback /></Link></h3>
          </div>
        </div>
      )}
    </div>
  )
}
