import React from "react";
import Subtitle from "../../Main/Subtitle";
import proposal from "../../assets/proposal.pdf"
import "./index.css";

const text = "Generating games procedurally "


export default (props) => (
  <div className="Intro part">
    <Subtitle text="INTRO" />
    <div className="Intro-text">
      <p>
        {text}
      </p>
      Click {" "}
      <a href={proposal} target="_blank" rel="noreferrer">
        here
      </a>
      {" "}
      to see the proposal
    </div>
  </div>
);
