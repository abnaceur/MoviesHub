import React from "react";
import Filter from "./components/Filter"
import "./Movies.css";
import "../App.css";

const Movies = () => {
  return (
    <React.Fragment>
      <Filter />
      <h1>Movies</h1>
    </React.Fragment>
  );
};

export default Movies;
