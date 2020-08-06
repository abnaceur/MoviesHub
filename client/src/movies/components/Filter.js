import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";

import "./Filter.css";
import "../../App.css";

const Filter = () => {
  const [showCategory, setShowCategory] = useState(false);
  const [rating, setRating] = useState(1);
  const [Category, setCategory] = useState("All");
  const ratingChanged = (newRating) => {
    setRating(newRating);
    console.log(rating);
  };
  const developCategory = (event) => {
    if (!showCategory) {
      setShowCategory(true);
    } else {
      console.log(event.target.id);
      setCategory(event.target.id);
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
    </React.Fragment>
  );
};

export default Filter;
