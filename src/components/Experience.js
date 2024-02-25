import React from "react";
import ExpInfoBox from "./ExpInfoBox";
import { FaAngleDoubleDown } from "react-icons/fa";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div
      id="experience"
      className="experience-section container-xl py-4 px-3 position-relative"
    >
      <FaAngleDoubleDown
        className="position-absolute down-arrow"
        onClick={() => {
          window.location.href = "#projects";
        }}
      />

      <div className="experience-header">
        <motion.h6
          transition={{ duration: 0.5, delay: 0 }}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          Explore My
        </motion.h6>
        <motion.h1
          transition={{ duration: 0.5, delay: 0.5 }}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          Experience / Skills
        </motion.h1>
      </div>
      <div className="experience-details mt-5">
        <motion.div
          transition={{ duration: 0.5, delay: 1 }}
          initial={{ x: "-20px", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="experience-box"
        >
          <h2 className="text-center">Frontend Development </h2>
          <div className="experience-info">
            <motion.div
              transition={{ duration: 0.5, delay: 1 }}
              initial={{ y: "10px", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="d-flex justify-content-between px-4 py-3 experience-content"
            >
              <ExpInfoBox title={"HTML"} type={"Intermediate"} />
              <ExpInfoBox title={"CSS"} type={"Intermediate"} />
            </motion.div>
            <motion.div
              transition={{ duration: 0.5, delay: 1.5 }}
              initial={{ y: "10px", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="d-flex justify-content-between px-4 py-3 experience-content"
            >
              <ExpInfoBox title={"Javascript"} type={"Intermediate"} />
              <ExpInfoBox title={"React JS"} type={"Intermediate"} />
            </motion.div>
            <motion.div
              transition={{ duration: 0.5, delay: 2 }}
              initial={{ y: "10px", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="d-flex justify-content-between px-4 py-3 experience-content"
            >
              <ExpInfoBox title={"Bootstarp"} type={"Intermediate"} />
              <ExpInfoBox title={"Material UI"} type={"Basics"} />
            </motion.div>
            <motion.div
              transition={{ duration: 0.5, delay: 2.5 }}
              initial={{ y: "10px", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="d-flex justify-content-between px-4 py-3 experience-content"
            >
              <ExpInfoBox title={"Typescript"} type={"Basics"} />
              <ExpInfoBox title={"Material UI"} type={"Basics"} />
            </motion.div>
            <motion.div
              transition={{ duration: 0.5, delay: 3 }}
              initial={{ y: "10px", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="d-flex justify-content-between px-4 py-3 experience-content"
            >
              <ExpInfoBox title={"Tailwind CSS"} type={"Basics"} />
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          transition={{ duration: 0.5, delay: 3.5 }}
          initial={{ x: "20px", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="experience-box"
        >
          <h2 className="text-center">Backend Development </h2>
          <div className="experience-info">
            <motion.div
              transition={{ duration: 0.5, delay: 4 }}
              initial={{ y: "10px", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="d-flex justify-content-between px-4 py-3 experience-content"
            >
              <ExpInfoBox title={"Node JS"} type={"Intermediate"} />
              <ExpInfoBox title={"Express JS"} type={"Intermediate"} />
            </motion.div>
            <motion.div
              transition={{ duration: 0.5, delay: 4.5 }}
              initial={{ y: "10px", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="d-flex justify-content-between px-4 py-3 experience-content"
            >
              <ExpInfoBox title={"Mongo DB"} type={"Intermediate"} />
              <ExpInfoBox title={"Mysql"} type={"Intermediate"} />
            </motion.div>
            <motion.div
              transition={{ duration: 0.5, delay: 5 }}
              initial={{ y: "10px", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="d-flex justify-content-between px-4 py-3 experience-content"
            >
              {/* <ExpInfoBox title={"JAVA"} type={"Basics"}/>  */}
              <ExpInfoBox title={"Git"} type={"Intermediate"} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
