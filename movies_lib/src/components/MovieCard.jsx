import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const imageUrl = import.meta.env.VITE_IMG;

const MovieCard = ({ movie, showLink = true }) => {

  return (
    <div className="movie-card">
      <img src={ imageUrl + movie.poster_path } alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>
        <FaStar className="star-icon"/> {movie.vote_average === 0 ? "upcoming" : (movie.vote_average).toFixed(1)}
      </p>
        {showLink && <div onClick={() => window.location.reload()}><Link to={`/movie/${movie.id}`}>Details</Link></div>}
    </div>
  )
}

export default MovieCard