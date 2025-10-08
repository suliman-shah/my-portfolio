import React from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaDatabase,
  FaMobile,
  FaDesktop,
  FaTools,
  FaServer,
} from "react-icons/fa";

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description:
        "Creating responsive and modern web applications using React.js and other cutting-edge technologies.",
      icon: <FaCode />,
    },
    {
      title: "Backend Development",
      description:
        "Building robust server-side applications with Node.js, Express, and efficient database management systems.",
      icon: <FaDatabase />,
    },
    {
      title: "Full Stack Development",
      description:
        "End-to-end application development, from database design to user interface implementation.",
      icon: <FaDesktop />,
    },
    {
      title: "API Development",
      description:
        "Designing and implementing RESTful APIs with proper authentication, documentation, and best practices.",
      icon: <FaMobile />,
    },
    {
      title: "Application Maintenance",
      description:
        "Providing ongoing support, bug fixes, and performance optimization for existing web applications to ensure smooth operation.",
      icon: <FaTools />,
    },
    // {
    //   title: "Technical Support",
    //   description:
    //     "Offering timely troubleshooting, system updates, security patches, and regular maintenance to keep your applications running efficiently.",
    //   icon: <FaServer />,
    // },
  ];

  return (
    <section className="services" id="services">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-header"
      >
        <h2>Services</h2>
        <p className="section-subtitle">What I can do for you</p>
      </motion.div>

      <motion.div
        className="services-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="service-card"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ y: -10 }}
          >
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <div className="service-bg"></div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Services;
