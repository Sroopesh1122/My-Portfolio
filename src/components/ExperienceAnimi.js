import ExpInfoBox from "./ExpInfoBox";
import { FaAngleDoubleDown } from "react-icons/fa";
import { motion } from "framer-motion";

const ExperienceAnimi = () => {
  const variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.5,duration:1 } },
  };
  const Yitems = {
    hidden: { opacity: 0, y: "20px" },
    show: { opacity: 1, y: 0 },
    transition: { duration: 0.5  },
  };
  const Xleftitems = {
    hidden: { opacity: 0, x: "-20px" },
    show: { opacity: 1, x: 0 ,transition: { staggerChildren: 0.5, duration: 0.5 } },
    
  };
  const Xrifhritems = {
    hidden: { opacity: 0, x: "20px" },
    show: { opacity: 1, x: 0,transition: { staggerChildren: 0.5, duration: 0.5 } },
  };
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

      <motion.div variants={variants} initial='hidden' whileInView={'show'} className="experience-header">
        <motion.h6 variants={Yitems} className="text-center">Explore My</motion.h6>
        <motion.h1 variants={Yitems} className="text-center">Experience / Skills</motion.h1>
      </motion.div>
      <motion.div  variants={Yitems} initial='hidden' whileInView={'show'} className="experience-details mt-5">
        <motion.div variants={Xleftitems} className="experience-box">
          <h2 className="text-center">Frontend Development </h2>
          <div className="experience-info">
            <motion.div variants={Yitems} className="d-flex justify-content-between px-4 py-3 experience-content">
              <ExpInfoBox title={"HTML"} type={"Intermediate"} />
              <ExpInfoBox title={"CSS"} type={"Intermediate"} />
            </motion.div>
            <motion.div variants={Yitems} className="d-flex justify-content-between px-4 py-3 experience-content">
              <ExpInfoBox title={"Javascript"} type={"Intermediate"} />
              <ExpInfoBox title={"React JS"} type={"Intermediate"} />
            </motion.div>
            <motion.div variants={Yitems} className="d-flex justify-content-between px-4 py-3 experience-content">
              <ExpInfoBox title={"Bootstarp"} type={"Intermediate"} />
              <ExpInfoBox title={"Material UI"} type={"Basics"} />
            </motion.div>
            <motion.div variants={Yitems} className="d-flex justify-content-between px-4 py-3 experience-content">
              <ExpInfoBox title={"Typescript"} type={"Basics"} />
              <ExpInfoBox title={"Framer Motion"} type={"Intermediate"} />
            </motion.div>
            <motion.div variants={Yitems} className="d-flex justify-content-between px-4 py-3 experience-content">
              <ExpInfoBox title={"Tailwind CSS"} type={"Basics"} />
            </motion.div>
          </div>
        </motion.div>
        <motion.div variants={Xrifhritems} className="experience-box">
          <h2 className="text-center">Backend Development </h2>
          <div className="experience-info">
            <motion.div variants={Yitems} className="d-flex justify-content-between px-4 py-3 experience-content">
              <ExpInfoBox title={"Node JS"} type={"Intermediate"} />
              <ExpInfoBox title={"Express JS"} type={"Intermediate"} />
            </motion.div>
            <motion.div variants={Yitems} className="d-flex justify-content-between px-4 py-3 experience-content">
              <ExpInfoBox title={"Mongo DB"} type={"Intermediate"} />
              <ExpInfoBox title={"Mysql"} type={"Intermediate"} />
            </motion.div>
            <motion.div variants={Yitems} className="d-flex justify-content-between px-4 py-3 experience-content">
              {/* <ExpInfoBox title={"JAVA"} type={"Basics"}/>  */}
              <ExpInfoBox title={"Git"} type={"Intermediate"} />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ExperienceAnimi;
