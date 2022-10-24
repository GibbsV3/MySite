import React from "react";
import { motion, useAnimation } from "framer-motion";
import slide from "./js/defaultVariant";
import violin from "./images/fiddle.gif";
import Passion from "./Passion";
import f1 from "./images/goal.gif";
import weight from "./images/fitness.gif";
import movie from "./images/video-camera.gif";
function Passions() {
  return (
    <div id="passionsWrapper">
      <motion.div
        className="row rounded-circle"
        variants={slide}
        whileInView="visible"
        initial="hidden"
        viewport={{ once: true }}
        id="passions"
      >
        <div className="row">
          <h1 className="my-auto" id="quote">
            "I don't have hobbies. I have passions."
          </h1>
          <footer>-Pablo Casals</footer>
        </div>
      </motion.div>
      <div className="row" id="interests">
        <motion.div
          className="row eTitle"
          variants={slide}
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true }}
        >
          <h1> Passions</h1>
        </motion.div>
        <Passion
          title="Violin"
          img={violin}
          alt="Violin"
          desc="I started playing the violin in the 4th grade. I played in the
            Ridgefield Highschool Symphonic Orchestra all throughout
            highschool. One of my dreams is to play Bach's Chaconne and even though 
            I am nowhere good enough to play it right now, I am determined to learn it by the time I graduate."
        />
        <Passion
          title="Formula 1"
          img={f1}
          alt="F1"
          desc="I have been a huge fan of f1 for the last 4 years. At first I would watch 
          the race replays on youtube in between classes in highschool, 
          but in 2021 I started watching the actual races and I fell in love with the sport. My favorite driver is Fernando Alonso. 
          But, I am also rooting for Lewis Hamilton to win his eight championship. My favorite team is Mclaren because I love their road cars."
        />
        <Passion
          title="Weight Lifting"
          img={weight}
          alt="Barbell"
          desc="I started wieght lifting at the end of highschool and I have continued ever since. 
          The gym is a place of zen for me where all my problems seem to float away. I definitely use it as a form of therapy. My personal records are:"
          list={["Bench: 225lbs", "Squat: 405lbs", "DeadliftL 335lbs"]}
        />
        <Passion
          title="Movies"
          img={movie}
          alt="Film Camera"
          desc="I love watching movies. My favorite aspect of a movie is the sountrack, 
          so if the movie has a good soundtrack, chances are I have seen it. Currently, my top 5 favorite
          movies are:"
          list={[
            "Intersteller",
            "Inception",
            "Imitation Game",
            "V for Vendetta",
            "Pirates of the Carribean: At World's End",
          ]}
        />
      </div>
    </div>
  );
}
export default Passions;
