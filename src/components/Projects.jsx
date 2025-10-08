import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const projectList = [
    // {
    //   name: "E-Diary web application",
    //   desc: "A web application for managing daily tasks and notes.",
    //   tech: ["React", "Vite", "Framer Motion", "CSS3", "MySQL", "Express.js"],
    //   preview: "/project1.jpg",
    //   demo: "#",
    //   github: "https://github.com/suliman-shah/e-dairy-App",
    // },
    {
      name: "Construction Project Management System",
      desc: "Developed a full-stack web application using React, Node.js, and MySQL for project management. Designed and implemented a database schema with efficient data relationships and SQL queries. Built RESTful APIs for backend services and integrated them with the frontend application. Implemented CRUD operations, data validation, and error handling following best practices.",
      tech: [
        "Node.js",
        "MySQL",
        "Express.js",
        "React.js",
        "CSS",
        "JavaScript",
        "HTML",
      ],
      preview: "/project2.jpg",
      demo: "https://construction-project-management-system-c75v.vercel.app/",
      github:
        "https://github.com/suliman-shah/Construction-Project-Management-System",
    },
    {
      name: "QuantiFi",
      desc: "QuantiFi is a modern React-based web application designed to streamline and enhance the quantification and evaluation process for recruiters. The platform provides intuitive tools for assessing candidate skills, calculating performance metrics, and generating actionable insights to assist in data-driven hiring decisions.",
      tech: [
        "JavaScript",
        "HTML",
        "CSS",
        "API",
        "React.js",
        "Node.js",
        "MongoDB",
        "Express",
        "Bootstrap",
      ],
      preview: "/project3.jpg",
      demo: "/quantfi.png",
      github: "https://github.com/suliman-shah/QuantiFi",
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
