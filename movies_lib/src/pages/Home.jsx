import React, { useRef } from 'react';
import '../Styles/pages/MovieGrid.css';
import TopRatedMovies from '../components/TopRatedMovies';
import PopularMovies from '../components/PopularMovies';
import arrow from "../img/arrow.png";
import NowPlayingMovies from '../components/NowPlayingMovies';



export default function Home() {
  const carouselTopMov = useRef(null);
  const carouselPopMov = useRef(null)
  const carouselNowPlayMov = useRef(null)
  
  const handleLeftClick = (e, ref) => {
    e.preventDefault();
    ref.current.scrollLeft -= ref.current.offsetWidth;
  }

  const handleRightClick = (e, ref) => {
    e.preventDefault();
    ref.current.scrollLeft += ref.current.offsetWidth;
  }

  return (
    <div className="container" >

      <div className="movie-container" >
      <h2 className="title">Top Rated movies</h2>
        <div className='carousel' ref={carouselTopMov}>
          <TopRatedMovies />
        </div>
        <div className="buttons">
          <button className='arrow left' onClick={(e) => handleLeftClick(e, carouselTopMov)}><img src={arrow} alt="arrow-icon" /></button>
          <button className='arrow right' onClick={(e) => handleRightClick(e, carouselTopMov)}><img src={arrow} alt="arrow-icon" /></button>
        </div>
      </div>
    
      <div className="movie-container">
        <h2 className="title">Popular Movies</h2>
        <div className="carousel" ref={carouselPopMov}>
          <PopularMovies />
        </div>
        <div className="buttons">
          <button className='arrow left' onClick={ (e) => handleLeftClick(e, carouselPopMov) }><img src={arrow} alt="arrow-icon"/></button>
          <button className='arrow right' onClick={ (e) => handleRightClick(e, carouselPopMov) }><img src={arrow} alt="arrow-icon"/></button>
        </div>
      </div>

      <div className="movie-container">
        <h2 className="title">Now Playing Movies</h2>
        <div className="carousel" ref={carouselNowPlayMov}>
          <NowPlayingMovies />
        </div>
        <div className="buttons">
          <button className='arrow left' onClick={ (e) => handleLeftClick(e, carouselNowPlayMov) }><img src={arrow} alt="arrow-icon"/></button>
          <button className='arrow right' onClick={ (e) => handleRightClick(e, carouselNowPlayMov) }><img src={arrow} alt="arrow-icon"/></button>
        </div>
      </div>
    </div>
  )
}
