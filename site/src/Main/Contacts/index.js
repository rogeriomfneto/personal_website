import React from "react";
import Media from "./Media";
import Subtitle from "../Subtitle";
import email_logo from "./images/email-logo.png";
import li_logo from "./images/linkedin-logo.png";
import github_logo from "./images/github-logo.png";
import "./index.css";

export default (props) => {
  return (
    <div className="Contacts part">
      <Subtitle text="CONTACTS" />
      <div className="Contacts-medias">
        <Media
          src={email_logo}
          alt="Email"
          href="mailto:rogeriomfneto@hotmail.com"
          media="Email"
          text="I reply fast"
        />

        <Media
          src={li_logo}
          alt="Linkedin"
          href="https://www.linkedin.com/in/rog%C3%A9rio-marcos-fernandes-neto-763346189/"
          media="Linkedin"
          text="I form conections"
        />

        <Media
          src={github_logo}
          alt="Github"
          href="https://github.com/rogeriomfneto"
          media="Github"
          text="I like to code"
        />
      </div>
    </div>
  );
};
