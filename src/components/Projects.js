import React from "react";
import ProjectCard from "./ProjectCard";
import { projectData } from "../Data/ProjectData";
import { FaAngleDoubleDown } from "react-icons/fa";


const Projects = () => {
  return (
    <div id="projects" className="d-flex flex-column justify-content-start py-4 container-xl project-section position-relative">
    <FaAngleDoubleDown className='position-absolute down-arrow' onClick={()=>{window.location.href="#contact"}}/>

      <div className="project-header">
        <h6 className="text-center">Browse My Recent</h6>
        <h1 className="text-center">Projects</h1>
      </div>
      <div className="project-info px-3 py-4 d-flex ">
            {
                projectData.map((val,i)=>{
                    return(
                        <ProjectCard title={val.title} git={val.git} demo={val.demo} image={val.img} key={i}/>
                    )
                })
            }
      </div>
    </div>
  );
};

export default Projects;
