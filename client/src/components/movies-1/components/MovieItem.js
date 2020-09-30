import React from "react";

import "./MovieItem.css";

const MovieItem = (props) => {
  const url =
    "https://image.tmdb.org/t/p/w185_and_h278_bestv2/" +
    props.movie.poster_path;
  const redirectMovie = (event) => {
    if (event) {
      window.location.href = "http://localhost:3000/lector";
    }
  };
  return (
    <div className="movie_item" key={props.movie.id} onClick={redirectMovie}>
      <div className="movie_info">337</div>
      <div className="movie_img">
        {props.movie.Poster && <img src={props.movie.Poster} alt={props.movie.Poster} />}
        {!props.movie.Poster && <img src={url} alt={props.movie.name} />}
      </div>

      <p className="movie_title">{props.movie.title && props.movie.title}</p>
      <p className="movie_title">{!props.movie.title && props.movie.Title}</p>
      <div className="movie_rating">
        {props.movie.popularity}/5
        <div className="movie_year">{props.movie.year}</div>
      </div>
    </div>
  );
};

export default MovieItem;
