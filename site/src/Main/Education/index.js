import React from "react";
import Piece from "../Piece";
import USPLogo from "./images/usp-logo.jpg";
import Fade from "react-reveal/Fade";
import Subtitle from "../Subtitle";
import "./index.css";

export default (props) => {
  const university =
    "Institute of Mathematics and Statistics - University of São Paulo";
  const degree = "Bachaelor in Computer Science";
  const duration = "2018-2021 (Expected)";
  return (
    <div className="Education part">
      <Subtitle text="EDUCATION" />
      <Piece
        src={USPLogo}
        alt="logo USP"
        place={university}
        title={degree}
        duration={duration}
      />
    </div>
  );
};
