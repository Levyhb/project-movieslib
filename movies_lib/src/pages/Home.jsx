import React, { useRef } from "react";
import "../Styles/pages/MovieGrid.css";
import TopRatedMovies from "../components/TopRatedMovies";
import PopularMovies from "../components/PopularMovies";
import NowPlayingMovies from "../components/NowPlayingMovies";
import UpcomingMovies from "../components/UpcomingMovies";
import ArrowsMov from "../components/ArrowsMov";

export default function Home() {
  const carouselTopMov = useRef(null);
  const carouselPopMov = useRef(null);
  const carouselNowPlayMov = useRef(null);
  const carouselUpcomingMov = useRef(null);

  return (
    <div className="container">
      <div className="movie-container">
        <h2 className="title">Top Rated movies</h2>
        <div className="carousel" ref={carouselTopMov}>
          <TopRatedMovies />
        </div>
        <ArrowsMov carousel={carouselTopMov} />
      </div>

      <div className="movie-container">
        <h2 className="title">Popular Movies</h2>
        <div className="carousel" ref={carouselPopMov}>
          <PopularMovies />
        </div>
        <ArrowsMov carousel={carouselPopMov} />
      </div>

      <div className="movie-container">
        <h2 className="title">Now Playing Movies</h2>
        <div className="carousel" ref={carouselNowPlayMov}>
          <NowPlayingMovies />
        </div>
        <ArrowsMov carousel={carouselNowPlayMov} />
      </div>

      <div className="movie-container">
        <h2 className="title">Upcoming Movies</h2>
        <div className="carousel" ref={carouselUpcomingMov}>
          <UpcomingMovies />
        </div>
        <ArrowsMov carousel={carouselUpcomingMov} />
      </div>
    </div>
  );
}
