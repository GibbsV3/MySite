import React from "react";
import { motion } from "framer-motion";
function Job(props) {
  let roles = [];
  props.description.forEach((element) => {
    roles.push(<li>{element}</li>);
  });
  const variant = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, y: 100 },
  };
  return (
    <motion.div
      className="row info box"
      variants={variant}
      whileInView="visible"
      initial="hidden"
      viewport={{ once: true }}
    >
      <div className="jobTitle">
        <h2>{props.title}</h2>
        <h3>{props.employer}</h3>
        <hr></hr>
      </div>
      <div className="jobDates">
        <p>Start: {props.start}</p>
        <p>End: {props.end}</p>
      </div>
      <div className="jobDescription">
        <h5>Description:</h5>
        <ul>{roles}</ul>
      </div>
    </motion.div>
  );
}
export default Job;
