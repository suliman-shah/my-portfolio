import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Handle menu toggle
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.classList.toggle("menu-open");
  };

  // Handle link click
  const handleLinkClick = () => {
    setIsOpen(false);
    document.body.classList.remove("menu-open");
  };

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        document.body.classList.remove("menu-open");
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="nav-container">
        {/* Logo with gradient effect */}
        <div className="logo">
          <span className="logo-primary">Suliman</span>
          <span className="logo-secondary">Shah</span>
        </div>

        {/* Navbar Links */}
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          {[
            "home",
            "about",
            "skills",
            "experience",
            "services",
            "projects",
            "testimonials",
            "contact",
          ].map((section) => (
            <li key={section}>
              <Link
                to={section}
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                onClick={handleLinkClick}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="/resume.pdf"
              download
              className="btn-nav"
              onClick={handleLinkClick}
            >
              Download Resume
            </a>
          </li>
        </ul>

        {/* Hamburger Menu */}
        <div
          className={`hamburger ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
