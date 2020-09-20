import React, { useState, useEffect } from "react";
import MovieItem from "./MovieItem";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import { useHttpClient } from "../../shared/hooks/http-hook";
import "./Filter.css";
import "../../App.css";

const MovieList = (props) => {
  const [moviesLoaded, setMoviesLoaded] = useState(null);
  const [page, setPage] = useState(1);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const loadMoreMovies = () => {
    setMoviesLoaded(moviesLoaded + 7);
  };
  const fetchMovies = async () => {
    try {
      const responseData = await sendRequest(
        `https://api.themoviedb.org/3/discover/movie?api_key=03629fbb07a3c96f17fbde76c54e3812&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`
      );
      if (moviesLoaded) {
        let tmpMovies = moviesLoaded.results;
        tmpMovies.push(responseData.results);
        console.log(tmpMovies);
      }
      setMoviesLoaded(responseData);
      let tmp = page + 1;
      setPage(tmp);
    } catch (err) {}
  };
  // useEffect(() => {
  //   fetchMovies();
  //   console.log("MoviesFetched");
  // }, [fetchMovies]);
  return (
    <React.Fragment>
      <button onClick={fetchMovies}>OKOK</button>
      <ReactScrollWheelHandler downHandler={fetchMovies}>
        {moviesLoaded &&
          moviesLoaded !== null &&
          moviesLoaded.results.map((movie, i) => {
            return <MovieItem key={movie.id} movie={movie} />;
          })}
      </ReactScrollWheelHandler>
    </React.Fragment>
  );
};

export default MovieList;
