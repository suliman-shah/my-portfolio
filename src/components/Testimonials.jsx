import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Fakhruddin",
      position: "department coordinator at university of Malakand",
      text: "Suleman delivered exceptional results on our web application project. His technical expertise and attention to detail made him a valuable asset to our team.",
      image: "/testimonial1.jpg",
    },
    // {
    //   name: "Michael Chen",
    //   position: "CTO at StartupHub",
    //   text: "Working with Suleman was a great experience. He not only delivered high-quality code but also provided valuable insights for improving our application architecture.",
    //   image: "/testimonial2.jpg",
    // },
    {
      name: "Adnan Tariq",
      position: "web developer at GoMarkho",
      text: "Suleman's full-stack development skills are impressive. He consistently delivered clean, efficient code and was always ready to tackle complex challenges.",
      image: "/testimonial3.jpg",
    },
  ];

  return (
    <section className="testimonials" id="testimonials">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-header"
      >
        <h2>Testimonials</h2>
        <p className="section-subtitle">What people say about my work</p>
      </motion.div>

      <motion.div
        className="testimonials-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="testimonial-card"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ y: -10 }}
          >
            <div className="testimonial-content">
              <FaQuoteLeft className="quote-icon" />
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-author">
                <div className="author-image">
                  <img src={testimonial.image} alt={testimonial.name} />
                </div>
                <div className="author-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.position}</p>
                </div>
              </div>
            </div>
            <div className="testimonial-bg"></div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Testimonials;
