import React from "react";
import Subtitle from "../../Main/Subtitle";
import proposal from "../../assets/proposal.pdf"
import "./index.css";

const text1 = "There are two main aspects in game design that are really important \
and are worth the concern: mission and space. Mission is the collection of objectives \
the player must complete to beat the game. Space is the environment in which the player \
travels and interacts in order to complete the missions. Both of them provide much of \
the fun we find in games and need to be developed really close one another." 
const text2 = "Joris Dormans, in his PhD thesis, proposes a framework in which we can generate \
both mission and space procedurally. This makes room for exploring new game mechanics \
and provides new methods for more efficient content creation."
const text3 = "In this thesis, we'll create a game based on the Dormans framework \
and provide an analysis about the strengths and weaknesses of the method. Also \
an explanation of the techniques proposed by Dormans will be developed in order to \
make it more accessible."

export default (props) => (
  <div className="Intro part">
    <Subtitle text="INTRO" />
    <div className="Intro-text">
      <p>
        {text1}
      </p>
      <p>
        {text2}
      </p>
      <p>
        {text3}
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
