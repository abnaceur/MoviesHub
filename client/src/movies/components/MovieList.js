import React, { useState, useEffect } from "react";
import MovieItem from "./MovieItem";
import Filter from "./Filter";
import { useHttpClient } from "../../shared/hooks/http-hook";
import "./Filter.css";
import "../../App.css";

const MovieList = (props) => {
  return (
    <React.Fragment>
      {props.movies.id}
    </React.Fragment>
  );
};

export default MovieList;
