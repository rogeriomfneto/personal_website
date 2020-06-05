import React from "react";

export default (props) => (
  <div className="Media">
    <div className="Media-logo">
      <a href={props.href} target="_blank">
        <img src={props.src} alt={props.alt} />
      </a>
    </div>
    <div className="Media-link">
      <a href={props.href} target="_blank">
        {" "}
        {props.media}{" "}
      </a>
    </div>
    <div className="Media-text"> {props.text} </div>
  </div>
);
