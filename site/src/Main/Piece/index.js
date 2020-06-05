import React from "react";
import Fade from "react-reveal/Fade";
import "./index.css";

export default (props) => (
  <Fade bottom>
    <div className="Piece">
      <div className="Piece-image">
        <img src={props.src} alt={props.alt} />
      </div>
      <div className="Piece-text">
        <h3>{props.place}</h3>
        <p>
          <strong>{props.title}</strong>
        </p>
        <p>{props.duration}</p>
        <p id="description" >{props.description}</p>
      </div>
    </div>
  </Fade>
);
