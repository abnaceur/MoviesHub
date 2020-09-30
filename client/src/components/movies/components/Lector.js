import React from "react";
import Commentary from "./Commentary/Commentary";
import { Player } from "video-react";

import "./Lector.css";
// import "node_modules/video-react/dist/video-react.css"; // import css

const Lector = (props) => {
  return (
    <div className="lector">
      <link rel="stylesheet" href="/css/video-react.css" />
      Titles
      <Player
        playsInline
        poster="/assets/poster.png"
        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
      />
      {/* <ControlBar autoHide={false} /> */}
      <Commentary />
    </div>
  );
};

export default Lector;
