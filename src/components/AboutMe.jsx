import React from "react";
import Skills from "./Skills";
import { motion } from "framer-motion";
import pImage from "./images/p.JPG";
import variant from "./js/defaultVariant";
import uconn from "./images/UconnLogo.jpeg";

function AboutMe() {
  return (
    <div id="aboutMe">
      <div className="personal row">
        <motion.div
          className="eTitle row"
          variants={variant}
          whileInView="visible"
          viewport={{ once: true }}
          initial="hidden"
        >
          <h1>About Me</h1>
        </motion.div>
      </div>
      <div className="row educationSkills">
        <div className="col-lg-6 col-md-12" id="basicInfo">
          <motion.div
            className="myInfo box"
            variants={variant}
            whileInView="visible"
            viewport={{ once: true }}
            initial="hidden"
          >
            <img className="profilePic" src={pImage} alt="Nidhish Yarlagadda" />
            <hr />
            <h3>Who am I?</h3>
            <div className="profileDesc">
              <p>
                My name is Nidhish Yarlagadda. I was born in Hyderabad, India
                and currently live in Southbury, Connecticut. My defining
                characteristic is my need for adversity. I surround myself with
                people who challenge me mentally and physically. But, that does
                not mean that I take myself super seriously. I have spent
                countless nights debating topics with my friends ranging from
                the existence of universal morality to whether there are more
                wheels or doors in the world (Wheels won). I am kind,
                lighthearted, and I deeply value a strong work ethic and
                adaptability. I have never lived in the same place for more than
                4 years, so I know how important it is to be adaptable.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="infoWrapper box"
            variants={variant}
            whileInView="visible"
            viewport={{ once: true }}
            initial="hidden"
          >
            <h2>Education</h2>
            <h3>University of Connecticut</h3>
            <p>
              Majoring in Computer Science and Engineering expecting to graduate
              in May 2024
            </p>
            <p>GPA: 3.968</p>
            <p>Relevent Classwork:</p>
            <ul>
              <li>
                Introduction to Principle Programming-{" "}
                <em>Recursion in Scheme</em>
              </li>
              <li>
                Data Structures and Object Oriented Design-{" "}
                <em>Trees, Heaps, Linked Lists, Queues.</em>
              </li>
              <li>
                Systems Programming- <em>C, threading, forking</em>
              </li>
            </ul>
            <br></br>
            <h3>Bentley University</h3>
            <p>
              Before I transferred to UConn, I was an Economics-Finance major at
              Bentley University.
            </p>
          </motion.div>
        </div>
        <div className="col-lg-6 col-md-12 skillsWrapper">
          <Skills />

          <motion.img
            variants={variant}
            whileInView="visible"
            viewport={{ once: true }}
            initial="hidden"
            className="uconnLogo row"
            src={uconn}
            alt="UConn Logo"
          />
        </div>
      </div>
    </div>
  );
}
export default AboutMe;
