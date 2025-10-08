import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const projectList = [
    {
      name: "Portfolio Website",
      desc: "Modern responsive portfolio built with React.js and Vite.",
      tech: ["React", "Vite", "Framer Motion", "CSS3"],
      preview: "/project1.jpg",
      demo: "#",
      github: "#",
    },
    {
      name: "Expense Tracker",
      desc: "Full-stack expense tracking application with data visualization and budget planning features.",
      tech: ["Node.js", "MongoDB", "Express", "React"],
      preview: "/project2.jpg",
      demo: "#",
      github: "#",
    },
    {
      name: "Unit Converter",
      desc: "Modern web application for converting units across different metrics with real-time calculations.",
      tech: ["JavaScript", "HTML5", "CSS3", "API"],
      preview: "/project3.jpg",
      demo: "#",
      github: "#",
    },
  ];

  const handleMouseMove = (e, card) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section className="projects" id="projects">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-header"
      >
        <h2>Featured Projects</h2>
        <p className="section-subtitle">Some of my recent work</p>
      </motion.div>

      <motion.div
        className="project-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
      >
        {projectList.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
            initial="rest"
            whileHover="hover"
          >
            <div className="project-content">
              <div className="project-header">
                <motion.h3
                  variants={{
                    hover: { color: "#00ffe0" },
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {project.name}
                </motion.h3>
                <div className="tech-stack">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <p className="project-description">{project.desc}</p>

              <div className="project-links">
                <a
                  href={project.demo}
                  className="demo-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                  Live Demo
                </a>
                <a
                  href={project.github}
                  className="github-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  Source Code
                </a>
              </div>
            </div>

            <div className="project-preview">
              <div className="preview-overlay"></div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
