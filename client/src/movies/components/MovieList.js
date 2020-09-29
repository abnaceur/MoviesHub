import React from "react";
import MovieItem from "./MovieItem";
import { useHttpClient } from "../../shared/hooks/http-hook";


// import Filter from "./Filter";
// import { useHttpClient } from "../../shared/hooks/http-hook";
import "./Filter.css";
import "../../App.css";

const MovieList = (props) => {

  return (
    <React.Fragment>
      {props.movies.map((movie) => {
        return <MovieItem movie={movie} />;
      })}
      {props.movies.Title && <MovieItem movie={props.movies} />}
    </React.Fragment>
  );
};

export default MovieList;
