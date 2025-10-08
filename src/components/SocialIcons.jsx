import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import { motion } from "framer-motion";

const SocialIcons = () => {
  return (
    <motion.div
      className="social-icons"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.8 }}
    >
      <a
        href="https://www.linkedin.com/in/suliman-shah"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin size={30} />
      </a>
      <a
        href="https://github.com/suliman-shah"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub size={30} />
      </a>
      <a href="https://wa.me/923119972296" target="_blank" rel="noreferrer">
        <FaWhatsapp size={30} />
      </a>
      <a
        href="https://www.instagram.com/yourprofile"
        target="_blank"
        rel="noreferrer"
      >
        <FaInstagram size={30} />
      </a>
      <a
        href="https://www.facebook.com/suleman.shah.259191"
        target="_blank"
        rel="noreferrer"
      >
        <FaFacebook size={30} />
      </a>
    </motion.div>
  );
};

export default SocialIcons;
