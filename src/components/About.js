import React from "react";
import srImage from "../Images/IMG_20231021_082643_807.jpg";
import experience from "../Images/badge-icon-png.jpg";
import education from "../Images/education-icon.jpg";
import { FaAngleDoubleDown } from "react-icons/fa";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div
      id="about"
      className="container-xl d-flex flex-column justify-content-center gap-100 py-5 px-3 position-relative about-section"
    >
      <FaAngleDoubleDown
        className="position-absolute down-arrow"
        onClick={() => {
          window.location.href = "#experience";
        }}
      />

      <div className="about-header">
        <motion.h6
          initial={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1 }}
          className="text-center"
        >
          Get to Know More
        </motion.h6>
        <motion.h1
          initial={{ y: "-10px", opacity: 0 }}
          transition={{ duration: 0.5,  }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          About Me
        </motion.h1>
      </div>
      <div className="d-flex justify-content-around align-items-center gap-20 about-container">
        <motion.div
          transition={{ duration: 1, }}
          initial={{ scale: 0.7, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="about-img d-flex"
        >
          <img src={srImage} alt="shivu" />
        </motion.div>
        <div className="about-info">
          <div className="d-flex justify-content-around about-boxes px-3">
            <motion.div
              transition={{ duration: 0.5, }}
              initial={{ x: "-20px", opacity: 0 }}
              whileInView={{ x: "0px", opacity: 1 }}
              viewport={{ once: true }}
              className="box"
            >
              <img src={experience} alt={experience} />
              <h5>Experience</h5>
              <h6>Fresher</h6>
              <h3>Mern Developer</h3>
            </motion.div>
            <motion.div
              transition={{ duration: 0.5,}}
              initial={{ x: "20px", opacity: 0 }}
              whileInView={{ x: "0px", opacity: 1 }}
              viewport={{ once: true }}
              className="box"
            >
              <img src={education} alt={education} />
              <h5>Education</h5>
              <h6>Bachelor's of Engineering {"(CSE)"}</h6>
              <h3>Graduation by july 2024</h3>
            </motion.div>
          </div>
          <motion.div
            transition={{ duration: 0.5, }}
            initial={{ y: "20px", opacity: 0 }}
            whileInView={{ y: "0px", opacity: 1 }}
            viewport={{ once: true }}
            className="p-3"
          >
            <strong>Hello! My name is Shivuroopesh</strong>. I'm a self-taught programmer with a
            passion for learning and exploring new technologies. My expertise
            spans from front-end development to back-end programming. I am
            currently expanding my skillset to include <strong>Next.JS 14 for high-scale
            application development</strong>  . As a dedicated and driven individual , I am
            constantly seeking out opportunities to grow and improve as a
            programmer
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
