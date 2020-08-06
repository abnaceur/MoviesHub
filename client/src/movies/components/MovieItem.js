import React from "react";

import "./MovieItem.css";
import "../../App.css";

const MovieItem = (props) => {
  const redirectMovie = (event) => {
    if (event) {
      window.location.href = "http://localhost:3000/lector";
    }
  };
  return (
    <div className="movie_item" key={props.movie.id} onClick={redirectMovie}>
      <div className="movie_info">337</div>
      <div className="movie_img">
        <img src={props.movie.coverImage} alt={props.movie.name} />
      </div>

      <p className="movie_title">{props.movie.name}</p>
      <div className="movie_rating">
        {props.movie.rating}/5
        <div className="movie_year">{props.movie.year}</div>
      </div>
    </div>
  );
};

export default MovieItem;
