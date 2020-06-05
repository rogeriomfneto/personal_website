import React from "react";
import AboutMe from "./AboutMe";
import Education from "./Education";
import Experience from "./Experience";
import Contacts from "./Contacts";
import Header from "./Header";
import "./index.css";

export default (props) => (
  <div>
    <Header />
    <AboutMe />
    <Education />
    <Experience />
    <Contacts />
  </div>
);
