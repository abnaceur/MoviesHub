import React from "react";
import Filter from "./components/Filter";
// import MovieList from "./components/MovieList";
// import queryString from "query-string";
import "./Movies.css";
import "../App.css";

const Movies = ({ location }) => {
  console.log(location);
  // console.log(queryString.parse(location));
  return (
    <div className="movies_pages_container">
      <div className="filter_container">
        <Filter />
      </div>
      {/* <div className="movies_container">
        <MovieList movies={fakeMovies} />
      </div> */}
    </div>
  );
};

export default Movies;
