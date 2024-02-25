import React from 'react'
import srImage from '../Images/SR.jpg'
import resume from '../resume/shivuroopesh resume.pdf'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { PiFileTextFill } from "react-icons/pi";
import { FaPhone } from "react-icons/fa"; 
import { FaAngleDoubleDown } from "react-icons/fa";
import {motion} from 'framer-motion';

const HeroSection = () => {
  return (
    <div id='profile' className='container-xl  d-flex justify-content-around px-4 py-5 hero-section position-relative'>
    <FaAngleDoubleDown className='position-absolute down-arrow' onClick={()=>{window.location.href="#about"}}/>
     
        <motion.div className='user-img' initial={{scale:0 , opacity:0}} animate={{scale:1,opacity:1}} transition={{duration:1}}>
            <img src={srImage} alt="shivu" />
        </motion.div>
        <div className='hero-info'>
            <motion.h6  transition={{duration:0.5,delay:1}} initial={{x:'20px',opacity:0}} animate={{x:0,opacity:1}} className='text-center'>Hello, I'm</motion.h6>
            <motion.h1  transition={{duration:0.5,delay:1.5}} initial={{x:'-20px',opacity:0}} animate={{x:0,opacity:1}} className='text-center'>Mern Developer</motion.h1>
            <motion.div transition={{duration:0.5,delay:2}} initial={{x:'20px',opacity:0}} animate={{x:0,opacity:1}}  className='hero-buttons d-flex justify-content-between'>
                <a href={resume} download={true} className='button'><PiFileTextFill className='btn-icon'/>Download Resume</a>
                <a href='#contact' className='button active'><FaPhone className='btn-icon'/>Contact Info</a>
            </motion.div>
            <motion.div transition={{duration:0.5,delay:2.5}} initial={{x:'-20px',opacity:0}} animate={{x:0,opacity:1}}  className='mt-3 d-flex justify-content-center gap-20'>
                <a href="https://www.linkedin.com/in/shivuroopesh-m-439ab0267" target='_blank' rel="noopener noreferrer" className='social-links'><FaLinkedin className='btn-icon-lg'/></a>
                <a href="https://github.com/Sroopesh1122" target='_blank' rel="noopener noreferrer" className='social-links'><FaGithub className='btn-icon-lg'/></a>
            </motion.div>
        </div>
    </div>
  )
}

export default HeroSection
