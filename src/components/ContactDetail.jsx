import React from "react";
import { motion } from "framer-motion";
export default function ContactDetail(props) {
  const variant = {
    visible: { opacity: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0 },
  };
  return (
    <motion.div
      variants={variant}
      whileInView="visible"
      initial="hidden"
      viewport={{ once: true }}
      className="contactDetail col-6"
    >
      <i className={props.icon}></i>
      <p>{props.detail}</p>
    </motion.div>
  );
}
