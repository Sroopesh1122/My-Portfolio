import React from 'react'

const ProjectCard = ({title,git,demo,image}) => {
  return (
    <div className='projects-card'>
         <div className='projects-img'>
         <img src={image} alt="" />
         </div>
         <h1 className='text-center'>{title}</h1>
         <div className="buttons">
            <a href={git} rel="noopener noreferrer" target='_blank' key={git} className='button pill'>GitHub</a>
            <a href={demo} rel="noopener noreferrer" target='_blank' key={demo} className='button pill'>Live Demo</a>
         </div>
      
    </div>
  )
}

export default ProjectCard
