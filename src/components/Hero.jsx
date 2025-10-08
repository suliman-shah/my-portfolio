import React from "react";
import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";
import { TypeAnimation } from "react-type-animation";
import SocialIcons from "./SocialIcons";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <motion.img
          src={profile}
          alt="Suliman Shah"
          className="profile-pic"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, type: "spring", stiffness: 100 }}
          whileHover={{ scale: 1.1, rotate: 5 }}
        />

        <h1>Hi, I'm Suliman Shah</h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="animated-titles"
        >
          <TypeAnimation
            sequence={[
              "MERN Stack Developer",
              2000,
              "React.js Developer",
              2000,
              "Full Stack Developer",
              2000,
            ]}
            speed={50}
            repeat={Infinity}
          />
        </motion.div>

        {/* Social Icons just below animated text */}
        <SocialIcons />
      </div>
    </section>
  );
};

export default Hero;
