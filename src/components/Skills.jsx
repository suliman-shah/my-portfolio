import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "React.js", level: 90 },
  { name: "Node.js", level: 85 },
  { name: "MongoDB", level: 80 },
  { name: "JavaScript", level: 95 },
  { name: "CSS / Sass", level: 85 },
];

const Skills = () => {
  const handleMouseMove = (e) => {
    const cards = document.getElementsByClassName("skill-bar-container");
    for (const card of cards) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    }
  };

  return (
    <section className="skills" id="skills">
      <h2>Technical Expertise</h2>
      <motion.div
        className="skills-container"
        onMouseMove={handleMouseMove}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            className="skill-bar-container"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <span className="skill-name" data-level={skill.level}>
              {skill.name}
            </span>
            <motion.div
              className="skill-bar-fill"
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, type: "spring", stiffness: 50 }}
            ></motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
