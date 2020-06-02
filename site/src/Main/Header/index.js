import React from "react";
import Rogerio from "./Rogerio.jpg";
import "./index.css";

export default (props) => (
  <div className="Header">
    <div className="Header-foto">
      <img src={Rogerio} alt="Rogério" />
    </div>
    <div className="Header-text">
      <p>
        I'm currently enjoying life as a{" "}
        <strong>third-year Computer Science student</strong> at the{" "}
        <strong>Institute of Mathematics and Statistics </strong> at{" "}
        <strong>University of São Paulo</strong>.
      </p>
      <p>
        Recently I've been interested in more theoretical topics such as{" "}
        <strong>Computational Geometry</strong> and{" "}
        <strong>Graph Theory</strong>.
      </p>
      <p>
        I also like to watch movies, series and play Tetris in my free time.
      </p>
    </div>
  </div>
);
