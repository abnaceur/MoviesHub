import React, { useState } from "react";
import MovieItem from "./MovieItem";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import "./Filter.css";
import "../../App.css";

const MovieList = (props) => {
  const [moviesLoaded, setMoviesLoaded] = useState(7);
  const loadMoreMovies = () => {
    setMoviesLoaded(moviesLoaded + 7);
  }
  return (
    <React.Fragment>
      <ReactScrollWheelHandler
        downHandler={loadMoreMovies}
      >
        {props.movies.map((movie, i) => {
          if (i < moviesLoaded) {
            return <MovieItem key={movie.id} movie={movie} />;
          } else {
            return null;
          }
        })}
      </ReactScrollWheelHandler>
    </React.Fragment>
  );
};

export default MovieList;
