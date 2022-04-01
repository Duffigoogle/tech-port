import React, { useState } from 'react'
import { projects as projectData } from '../data'
import { Category } from '../type'
import ProjectCardLayout from './ProjectCardLayout'
import ProjectNavComp from './ProjectNavComp'

const ProjectsComp = () => {
    const [proj, setProj] =useState(projectData);
    const [activeTab, setActiveTab] = useState("All");

    //this function will filter the projecData when the a project tab is selected
    const tabFilterHandler = (category: Category | "All")=> {
        if (category === "All") {
            setProj(projectData);
            setActiveTab(category);
            return;
        }

        const newArray = projectData.filter((project) => project.category.includes(category));
        setProj(newArray);
        setActiveTab(category);
    };
    
  return (
    <div className='px-5 py-2 overflow-scroll' style={{height: "70vh"}}>
       <ProjectNavComp activeTab={activeTab} tabFilterHandler={tabFilterHandler} />
        <section className='relative grid grid-cols-12 gap-4 my-3'>
            {projectData.map((project) => (
                <div className='col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200'>
                    <ProjectCardLayout projects={project} key={project.name} />
                </div>
            ))}
        </section>
    </div>
  )
}

export default ProjectsComp