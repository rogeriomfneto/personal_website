import React from "react";
import Subtitle from "../Subtitle";
import Piece from "../Piece";
import logo from "./images/qa-logo.png";
import "./index.css";

export default (props) => {
  const company = "Quinto Andar";
  const ocupation = "Software Engineer Intern (Summer Job)";
  const duration = "Jan 2020 - Feb 2020";
  const description =
    "During this internship I developed a list system for the website. \
    I used React, Redux and Firestore";
  return (
    <div className="Experience part">
      <Subtitle text="EXPERIENCE" />
      <Piece
        src={logo}
        alt="logo Quinto Andar"
        place={company}
        title={ocupation}
        duration={duration}
        description={description}
      />
    </div>
  );
};
