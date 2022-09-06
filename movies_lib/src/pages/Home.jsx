import React, { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Loading from '../components/Loading';
import MovieCard from '../components/MovieCard';
import '../Styles/pages/MovieGrid.css';
import arrow from "../img/arrow.png";

const moviesUrl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;


export default function Home() {
  const carousel = useRef(null)

  const [topMovies, setTopMovies] = useState([])

  const getTopRatedMovies = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setTopMovies(data.results);
  }

  const handleLeftClick = (e) => {
    e.preventDefault()
    console.log(carousel.current.offsetWidth)
    
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  }

  const handleRightClick = (e) => {
    e.preventDefault()
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  }

  useEffect(() => {
    const topRatedUrl = `${moviesUrl}top_rated?${apiKey}`
    getTopRatedMovies(topRatedUrl)
  }, []);

  return (
    <div className="container" >
      <h2 className="title">Top Rated movies:</h2>
      <div className="movie-container" ref={carousel}>
      {topMovies.length === 0 && <Loading />}
      {topMovies && topMovies.map((movie) => (
        <MovieCard movie={ movie } key={ movie.id} />
      ))}
      </div>
      <div className="buttons">
        <button className='arrow left'><img src={arrow} alt="arrow-icon" onClick={handleLeftClick}/></button>
        <button className='arrow right'><img src={arrow} alt="arrow-icon" onClick={handleRightClick}/></button>
      </div>
    </div>
  )
}
