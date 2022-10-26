import React from "react";
import Skill from "./Skill";
import { motion, useAnimation } from "framer-motion";
import variant from "./js/defaultVariant";
function Skills() {
  return (
    <motion.div
      className="skillsContainer minWidth box"
      variants={variant}
      whileInView="visible"
      viewport={{ once: true }}
      initial="hidden"
    >
      <h2 className="skillsTitle">Skills</h2>
      <div className="skillsDetails">
        <Skill name="Python" progress="75%" />
        <Skill name="Java" progress="60%" />
        <Skill name="Microsoft Access" progress="60%" />
        <Skill name="Scheme" progress="50%" />
        <Skill name="React.js" progress="45%" />
        <Skill name="Bootstrap" progress="40%" />
        <Skill name="HTML" progress="40%" />
        <Skill name="CSS" progress="40%" />
        <Skill name="JavaScript" progress="30%" />
        <Skill name="jQuery" progress="20%" />
        <Skill name="C" progress="20%" />
        <Skill name="Node.js" progress="20%" />
      </div>
    </motion.div>
  );
}
export default Skills;
