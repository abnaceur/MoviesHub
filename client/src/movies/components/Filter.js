import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import MovieList from "./MovieList";

import "./Filter.css";
import "../../App.css";

const Filter = (props) => {
  const [showCategory, setShowCategory] = useState(false);
  const [rating, setRating] = useState(1);
  const [movies, setMovies] = useState(props.movies);
  const [Category, setCategory] = useState("All");
  const ratingChanged = (newRating) => {
    setRating(newRating);
    // const filteredUsers1 = props.items.filter(
    //   (user) => user.age >= formState.inputs.ageMin.value
    // );
    if (Category === "All") {
      setMovies(props.movies.filter((movie) => movie.rating >= newRating));
    } else {
      // let TmpMovies = props.movies.filter((movie) => movie.category === Category);
      setMovies(props.movies.filter((movie) => movie.rating >= newRating));
    }
    console.log(rating);
  };
  const developCategory = (event) => {
    if (!showCategory) {
      setShowCategory(true);
    } else {
      console.log(event.target.id);
      setCategory(event.target.id);
      if (rating === 1) {
        // setMovies(props.movies.filter((movie) => movie.category === event.target.id));
      } else {
        // let TmpMovies = props.movies.filter((movie) => movie.rating >== rating);
        // setMovies(props.movies.filter((movie) => movie.category === event.target.id));
      }
      setShowCategory(false);
    }
  };

  return (
    <React.Fragment>
      <div className="filterMenu">
        <div className="filterElement">
          <ReactStars
            classNames="filterItem"
            count={5}
            onChange={ratingChanged}
            size={20}
            activeColor="#2f808b"
          />
        </div>
        <div className="filterElement">
          <button
            onClick={developCategory}
            id={Category}
            className="filterItem"
          >
            {Category}
          </button>
          {showCategory && (
            <div className="">
              <button
                className="filterItem"
                id="Action"
                onClick={developCategory}
              >
                {" "}
                Action{" "}
              </button>
              <button
                className="filterItem"
                id="Policier"
                onClick={developCategory}
              >
                {" "}
                Policier{" "}
              </button>
              <button
                className="filterItem"
                id="Horreur"
                onClick={developCategory}
              >
                {" "}
                Horreur{" "}
              </button>
              <button className="filterItem" id="All" onClick={developCategory}>
                {" "}
                All{" "}
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="movies_container">
        <MovieList movies={movies} />
      </div>
    </React.Fragment>
  );
};

export default Filter;
