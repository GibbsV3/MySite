import React from "react";
import ContactDetail from "./ContactDetail";
import { motion } from "framer-motion";
export default function Footer() {
  const variant = {
    visible: { opacity: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0 },
  };
  return (
    <footer id="footer">
      <h5>Created by Nidhish Yarlagadda</h5>
      <div className="row contactDetails">
        <ContactDetail
          icon="fa-solid fa-envelope"
          detail="yarlagadda.nidhish@gmail.com"
        />
        <ContactDetail icon="fa-solid fa-phone" detail="203-919-0735" />
      </div>
    </footer>
  );
}
