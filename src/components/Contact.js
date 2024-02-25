import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SlScreenSmartphone } from "react-icons/sl";
import { FaAngleDoubleDown } from "react-icons/fa";
import {motion} from 'framer-motion'

const Contact = () => {
  const variants={
    hidden:{opacity:0},
    show:{opacity:1 ,transition:{ staggerChildren:0.5}},
    
  }
  const items={
    hidden:{opacity:0,y:'20px'},
    show:{opacity:1,y:0},
    transition:{ duration:1}
  }

  return (
    <div id="contact" className=" py-4 contact-section container-xl position-relative">
    <FaAngleDoubleDown className='position-absolute down-arrow rotate-180' onClick={()=>{window.scrollTo(0,0)}}/>

      <div className="contact-header">
        <h6 className="text-center">Get in Touch</h6>
        <h1 className="text-center">Contact Me</h1>
      </div>
      <div className="contact-info px-3">
        <motion.div variants={variants}  initial='hidden' whileInView={'show'} className="links d-flex justify-content-center flex-wrap gap-30 align-items-center">
          <motion.a variants={items} href="https://www.linkedin.com/in/shivuroopesh-m-439ab0267" target='_blank' rel="noopener noreferrer" className="button pill">
            <FaLinkedin className="icon" />
            <span>LinkedIn</span>
          </motion.a>
          <motion.a variants={items}  href="mailto:shivuroopesh6362@gmail.com" className="button pill">
            <MdEmail className="icon" />
            <span>shivuroopesh6362@gmail.com</span>
          </motion.a>
          <motion.a variants={items}  href="tel:6362379895" className="button pill">
            <SlScreenSmartphone className="icon" />
            <span>6362379895</span>
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
