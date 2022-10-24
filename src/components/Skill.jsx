import React from "react";
import { motion, useAnimation } from "framer-motion";
function Skill(props) {
  const variant = {
    visible: { width: props.progress, transition: { duration: 1 } },
    hidden: { width: 0 },
  };
  const pvariant = {
    visible: { opacity: 1, transition: { delay: 1, duration: 0.5 } },
    hidden: { opacity: 0 },
  };
  return (
    <div className="detail">
      <p>
        {props.name}
        <span className="skillsBar">
          <motion.span
            variants={variant}
            viewport={{ once: true }}
            className="skillsProg"
          ></motion.span>
          <motion.span
            className="percentage"
            variants={pvariant}
            viewport={{ once: true }}
          >
            {props.progress}
          </motion.span>
        </span>
      </p>
    </div>
  );
}
export default Skill;
