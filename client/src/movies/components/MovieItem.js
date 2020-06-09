import React from "react";
import "./MovieItem.css";
import "../../App.css";

const MovieItem = (props) => {
  return (
    <div className="movie_item">
      <div className="movie_info">337</div>
      <img
        src={props.movie.coverImage}
        alt={props.movie.name}
        className="movie_img"
      />

      <p className="movie_title">{props.movie.name}</p>
      <p className="movie_rating">
        {props.movie.rating}/5
        <div className="movie_year">{props.movie.year}</div>
      </p>
    </div>
  );
};

export default MovieItem;
