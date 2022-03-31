import React from 'react'
import { projects } from '../data'
import ProjectCardLayout from './ProjectCardLayout'

const ProjectsComp = () => {
  return (
    <div>ProjectsComp
        <nav>
            Proj Navbar
        </nav>
        <section className='grid grid-cols-12 gap-4 my-3'>
            {projects.map((project) => (
                <div className='col-span-12 p-2 sm:col-span-6 lg:col-span-4'>
                    <ProjectCardLayout projects={project} key={project.name} />
                </div>
            ))}
        </section>
    </div>
  )
}

export default ProjectsComp