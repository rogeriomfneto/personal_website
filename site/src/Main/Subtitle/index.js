import React from "react";
import Fade from "react-reveal/Fade";
import "./index.css";

export default (props) => (
  <div className="Subtitle">
    <Fade>{props.text}</Fade>
  </div>
);
