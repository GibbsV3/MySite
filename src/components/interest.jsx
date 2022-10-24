import React from "react";
import interests from "./interests";

function interest(props) {
  return (
    <div className="interest">
      <img alt={props.imgAlt} src={props.imgURL}></img>
      <h5>{props.name}</h5>
      <p>{props.description}</p>
    </div>
  );
}
export default interest;
