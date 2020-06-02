import React from "react";
import Piece from "./Piece";
import USPLogo from "./images/usp-logo.jpg";
import Fade from "react-reveal/Fade";
import "./index.css";

export default (props) => {
  const university =
    "Institute of Mathematics and Statistics - University of São Paulo";
  const degree = "Bachaelor in Computer Science";
  const duration = "2018-2021 (Expected)";
  return (
    <div className="Education">
      <div className="Education-title">
        <Fade bottom>
          <strong>EDUCATION</strong>
        </Fade>
      </div>
      <Fade bottom>
        <Piece
          src={USPLogo}
          alt="logo USP"
          university={university}
          degree={degree}
          duration={duration}
        />
      </Fade>
    </div>
  );
};
