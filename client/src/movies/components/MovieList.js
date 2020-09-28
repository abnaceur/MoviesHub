import React from "react";
import MovieItem from "./MovieItem";
<<<<<<< HEAD
import { useHttpClient } from "../../shared/hooks/http-hook";


=======
// import Filter from "./Filter";
// import { useHttpClient } from "../../shared/hooks/http-hook";
>>>>>>> a899a3a8d06518f67efde8e47511defa5e150515
import "./Filter.css";
import "../../App.css";

const MovieList = (props) => {

  return (
    <React.Fragment>
<<<<<<< HEAD
      {!props.movies.Title && props.movies.map((movie) => {
        return (<MovieItem movie={movie} />)
=======
      {props.movies.map((movie) => {
        return <MovieItem movie={movie} />;
>>>>>>> a899a3a8d06518f67efde8e47511defa5e150515
      })}
      {props.movies.Title && <MovieItem movie={props.movies} />}
    </React.Fragment>
  );
};

export default MovieList;
