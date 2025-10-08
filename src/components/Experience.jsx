import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap, FaCertificate } from "react-icons/fa";

const Experience = () => {
  const [activeTab, setActiveTab] = useState("experience");

  const experiences = [
    // Commented out experience entries for now
    // {
    //   title: "Full Stack Developer",
    //   company: "TechCorp Solutions",
    //   duration: "2023 - Present",
    //   description: [
    //     "Developed and maintained multiple full-stack web applications using MERN stack",
    //     "Implemented responsive designs and modern UI/UX practices",
    //     "Collaborated with cross-functional teams to deliver high-quality solutions",
    //   ],
    // },
    // {
    //   title: "Frontend Developer",
    //   company: "Web Innovators",
    //   duration: "2022 - 2023",
    //   description: [
    //     "Built responsive and interactive web interfaces using React.js",
    //     "Optimized application performance and loading times",
    //     "Worked with REST APIs and state management solutions",
    //   ],
    // },
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Malakand",
      duration: "2021 - 2025",
      description: [
        "Graduated with a Bachelor of Science in Computer Science, achieving 3rd position in the department.",
        "Relevant coursework: Web Development, Database Systems, Software Architecture",
      ],
    },
    {
      degree: "FSc Pre-Engineering  ",
      institution: "Islamia Model College Timergara,  B.I.S.E Malakand ",
      duration: "2019 - 2021",
      description: [" "],
    },
  ];

  const certificates = [
    // {
    //   title: "Meta Frontend Developer Professional Certificate",
    //   issuer: "Meta (formerly Facebook)",
    //   date: "2023",
    //   description: [
    //     "Advanced React.js development",
    //     "Modern frontend practices and patterns",
    //     "Performance optimization techniques",
    //   ],
    // },
    // {
    //   title: "AWS Certified Developer - Associate",
    //   issuer: "Amazon Web Services",
    //   date: "2022",
    //   description: [
    //     "Cloud architecture and deployment",
    //     "AWS services and best practices",
    //     "Serverless application development",
    //   ],
    // },
  ];

  const tabVariants = {
    active: {
      color: "#00ffe0",
      borderColor: "#00ffe0",
      scale: 1.1,
    },
    inactive: {
      color: "#fff",
      borderColor: "rgba(255, 255, 255, 0.1)",
      scale: 1,
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="experience" id="experience">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-header"
      >
        <h2>Experience</h2>
        <p className="section-subtitle">My professional journey</p>
      </motion.div>

      <div className="experience-container">
        <div className="experience-tabs">
          <motion.button
            className={`tab-button ${
              activeTab === "experience" ? "active" : ""
            }`}
            onClick={() => setActiveTab("experience")}
            variants={tabVariants}
            animate={activeTab === "experience" ? "active" : "inactive"}
            whileHover={{ scale: 1.05 }}
          >
            <FaBriefcase /> Experience
          </motion.button>
          <motion.button
            className={`tab-button ${
              activeTab === "education" ? "active" : ""
            }`}
            onClick={() => setActiveTab("education")}
            variants={tabVariants}
            animate={activeTab === "education" ? "active" : "inactive"}
            whileHover={{ scale: 1.05 }}
          >
            <FaGraduationCap /> Education
          </motion.button>
          <motion.button
            className={`tab-button ${
              activeTab === "certificates" ? "active" : ""
            }`}
            onClick={() => setActiveTab("certificates")}
            variants={tabVariants}
            animate={activeTab === "certificates" ? "active" : "inactive"}
            whileHover={{ scale: 1.05 }}
          >
            <FaCertificate /> Certificates
          </motion.button>
        </div>

        <motion.div
          className="experience-content"
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          key={activeTab}
        >
          {activeTab === "experience" && (
            <div className="timeline">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="timeline-item"
                  variants={itemVariants}
                >
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h3>{exp.title}</h3>
                    <h4>{exp.company}</h4>
                    <p className="duration">{exp.duration}</p>
                    <ul>
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === "education" && (
            <div className="timeline">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="timeline-item"
                  variants={itemVariants}
                >
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h3>{edu.degree}</h3>
                    <h4>{edu.institution}</h4>
                    <p className="duration">{edu.duration}</p>
                    <ul>
                      {edu.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === "certificates" && (
            <div className="timeline">
              {certificates.map((cert, index) => (
                <motion.div
                  key={index}
                  className="timeline-item"
                  variants={itemVariants}
                >
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h3>{cert.title}</h3>
                    <h4>{cert.issuer}</h4>
                    <p className="duration">{cert.date}</p>
                    <ul>
                      {cert.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
