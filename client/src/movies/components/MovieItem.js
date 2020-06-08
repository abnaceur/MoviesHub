import React from "react";
import "./MovieItem.css";
import "../../App.css";

const MovieItem = (props) => {
  return (
    <div className="movie_item">
      <img
        src={props.movie.coverImage}
        alt={props.movie.name}
        className="movie_img"
      />
      <p className="movie_title">{props.movie.name}</p>
    </div>
  );
};

export default MovieItem;
