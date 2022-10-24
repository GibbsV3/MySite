import React from "react";
import Job from "./Job";
import { motion } from "framer-motion";
import slide from "./js/defaultVariant";
function Experience() {
  return (
    <div className="row" id="experience">
      <motion.div
        className="eTitle row"
        variants={slide}
        whileInView="visible"
        initial="hidden"
        viewport={{ once: true }}
      >
        <h1>Experience</h1>
      </motion.div>
      <div className="jobs row">
        <Job
          title="Student Conduct Assistant"
          employer="Bentley University Office of Student Conduct"
          start="June 2021"
          end="August 2021"
          description={[
            "Researched and analyzed the conduct systems of similar universities.",
            "Reviewed the Bentley Student Handbook and recommended changes.",
            "Collaborated with staff to create new services during the student conduct process.",
          ]}
        />
        <Job
          title="Analyst"
          employer="HamletHub"
          start="April 2019"
          end="June 2019"
          description={[
            "Analyzed the company’s readership data in order to formulate strategies for the business to ensure future success.",
            "Identified the target demographic of the business and composed articles using marketing techniques to increase readership.",
            "Communicated findings to executives.",
          ]}
        />
      </div>
    </div>
  );
}
export default Experience;
