import React from "react";
import slide from "./js/defaultVariant";
import { motion } from "framer-motion";

function Passion(props) {
  let elements = [];
  if (props.list) {
    props.list.forEach((element) => {
      elements.push(<li>{element}</li>);
    });
  }
  return (
    <motion.div
      variants={slide}
      whileInView="visible"
      initial="hidden"
      viewport={{ once: true }}
      className="row minWidth info box"
    >
      <div className="pTitle">
        <h3>{props.title}</h3>
      </div>
      <div className="pDesc">
        <div className="pImgContainer">
          <img className="pImg" alt={props.alt} src={props.img}></img>
        </div>
        <div>
          <p>{props.desc}</p>
          <ul>{elements}</ul>
        </div>
      </div>
    </motion.div>
  );
}
export default Passion;
