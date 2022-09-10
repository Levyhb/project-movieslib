import React, { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import { BsFillFileEarmarkTextFill, BsFillPersonFill, BsGraphUp, BsHourglassSplit, BsWallet2 } from "react-icons/bs";
import "../Styles/pages/MovieDetails.css";
import MovieCard from '../components/MovieCard';
import SimilarMovies from '../components/SimilarMovies';
import Loading from '../components/Loading';
import { MdMovieCreation } from "react-icons/md"
import { GiDirectorChair } from "react-icons/gi";
import { FaHome } from 'react-icons/fa';

const moviesUrl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

export default function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState();
  const [cast, setCast] = useState();  
  
  const getCast = async (url) => {
    const response = await fetch(url);
    const data = await response.json();

    setCast(data);
  }

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
    const castMovie = `${moviesUrl}${id}/casts?${apiKey}`
    getCast(castMovie);
    getMovieDetails(movieDetailUrl);
  }, []);
  

  return (
    <div className="movie-page">
      {movie && cast ?(
        <div>
          <div className='movie-info'>
            <MovieCard movie={movie} showLink={false} />
            <p className='tagline'>{movie.tagline}</p>
            <div className='info'>
              <div className="info">
                <h3>
                  <GiDirectorChair /> Direction
                </h3>
                <div className='list-movies'>
                  {
                    cast.crew.filter((e) => e.job === "Director").map((director) => (
                      <p key={ director.id }>{director.name}</p>
                    ))
                  }
                </div>
              </div>

              <div className="info">
                <h3>
                  <BsFillPersonFill /> Cast
                </h3>
                <div className='list-movies'>
                  {
                    (cast.cast.map((e) => e.name).slice(0,5).map((element) => (
                      <p key={ element.id }>{element}</p>
                    )))
                  }
                </div>
              </div>

              <div className='info'>
                <h3>
                  <MdMovieCreation /> Genre
                </h3>
                <div className='list-movies'>
                  {movie.genres.filter((e) => e.id).map((element) => (<p key={ element.id }>{element.name}</p>)) }
                </div>
              </div>

              <div className='info'>
                <h3>
                  <BsFillFileEarmarkTextFill /> Description
                </h3>
                <h4 className="release-date">Release Date: ({(movie.release_date)})</h4>
                <p className="description">{movie.overview}</p>
              </div>

              <div className="info description">
                <h3>
                  <BsHourglassSplit /> Durability
                </h3>
                <p>{movie.runtime} minutes</p>
              </div>

              <div className="info">
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

            </div>
          </div>
          <div className='container'>
            <h2 className='title similar-movie-title'>See others movies similiar to <span className='query-text'>{movie.title}</span></h2>
            <div className='container-grid similar-movies'>
              <SimilarMovies />
            </div>
            <h3 className='back-to-home'><Link to="/">Back to Home <FaHome /></Link></h3>
          </div>
        </div>
      ): <Loading />}
    </div>
  )
}
