import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import MovieList from "./MovieList";
import { useHttpClient } from "../../shared/hooks/http-hook";
import { useForm } from "../../shared/hooks/form-hook";
import Input from "../../shared/FormElements/Input";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";
import "./Filter.css";
import "../../App.css";

const Filter = (props) => {
  const [moviesLoaded, setMoviesLoaded] = useState(false);
  const [formState, inputHandler] = useForm(
    {
      movie: {
        value: "",
        isValid: false,
      },
    },
    false
  );
  const [showCategory, setShowCategory] = useState(false);
  const [page, setPage] = useState(1);
  const [rating, setRating] = useState(1);
  const [setMovies] = useState(props.movies);
  const [Category, setCategory] = useState({ id: 0, value: "All" });
  const [CategoryList, setCategoryList] = useState(null);
  const { sendRequest } = useHttpClient();
  const fetchMovies = async (reload, categorytmp) => {
    try {
      let responseData;
      if (Category.id === 0 && !categorytmp) {
        responseData = await sendRequest(
          `https://api.themoviedb.org/3/discover/movie?api_key=03629fbb07a3c96f17fbde76c54e3812&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`
        );
        console.log("OKOK");
      } else if (categorytmp === 0) {
        responseData = await sendRequest(
          `https://api.themoviedb.org/3/discover/movie?api_key=03629fbb07a3c96f17fbde76c54e3812&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${1}`
        );
        console.log(page);
      } else if (categorytmp !== 0 && reload === true) {
        responseData = await sendRequest(
          `https://api.themoviedb.org/3/discover/movie?api_key=03629fbb07a3c96f17fbde76c54e3812&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${1}&with_genres=${categorytmp}`
        );
      } else {
        responseData = await sendRequest(
          `https://api.themoviedb.org/3/discover/movie?api_key=03629fbb07a3c96f17fbde76c54e3812&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${Category.id}`
        );
      }
      if (moviesLoaded && reload !== true) {
        let tmpMovies = moviesLoaded;
        responseData.results.map((movie) => {
          tmpMovies.push(movie);
        });
        setMoviesLoaded(tmpMovies);
        let tmp = page + 1;
        setPage(tmp);
      } else {
        setMoviesLoaded(responseData.results);
        setPage(2);
      }
    } catch (err) {}
  };
  const fetchSearchMovies = async () => {
    try {
      let responseData;
      responseData = await sendRequest(
        `http://www.omdbapi.com/?t=${formState.inputs.movie.value}&apikey=851869e0`
      );
      console.log(responseData)
      setMoviesLoaded(responseData)
    } catch (err) { }
  };
  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const responseData = await sendRequest(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=03629fbb07a3c96f17fbde76c54e3812&language=en-US
          `
        );
        setCategoryList(responseData.genres);
      } catch (err) {}
    };
    fetchMovies();
    fetchCategory();
  }, [sendRequest]);
  const ratingChanged = (newRating) => {
    setRating(newRating);
    if (Category.value === "All") {
      setMovies(props.movies.filter((movie) => movie.rating >= newRating));
    } else {
      setMovies(props.movies.filter((movie) => movie.rating >= newRating));
    }
  };
  const developCategory = (event) => {
    if (!showCategory) {
      setShowCategory(true);
    } else {
      setCategory({ id: event.target.id, value: event.target.value });
      if (rating === 1) {
      } else {
      }
      fetchMovies(true, event.target.id);
      setShowCategory(false);
    }
  };

  const setAll = () => {
    setCategory({ id: 0, value: "All" });
    fetchMovies(true, 0);
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
            id={Category.id}
            className="filterItem"
          >
            {Category.value}
          </button>
          
          {showCategory &&
            CategoryList &&
            CategoryList.map((Category, i) => {
              return (
                <button
                  key={i}
                  className="filterItem"
                  id={Category.id}
                  value={Category.name}
                  onClick={developCategory}
                >
                  {Category.name}
                </button>
              );
            })}
          <button className="filterItem" id="0" onClick={setAll} value="All">
            All
          </button>
        </div>
        <Input
          id="movie"
          element="input"
          type="text"
          validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(2)]}
          label="Movie"
          errorText="Please enter a valid Movie Title. (2 characters min.)"
          initialValue=""
          initialValid={false}
          onInput={inputHandler}
        />
        <button onClick={fetchSearchMovies}>SEARCH</button>
      </div>
      <div className="movies_container">
        {moviesLoaded && (
          <ReactScrollWheelHandler downHandler={fetchMovies}>
            <MovieList movies={moviesLoaded} />
          </ReactScrollWheelHandler>
        )}
      </div>
    </React.Fragment>
  );
};

export default Filter;
