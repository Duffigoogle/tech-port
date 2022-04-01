import React, { useState } from 'react'
import { IProjects } from '../type';
// import { projects } from '../data';
import { FunctionComponent } from 'react';
import Image from 'next/image';
import Icons from './Icons';

const ProjectCardLayout:FunctionComponent<{
    projects:IProjects;
}>= ({
    projects:{name, description, img_src, github_url, deployed_link, tech_used, category}
}) => {
    const [showContent, setShowContent] = useState(false);

    const showDetails = () => {
        setShowContent(true);
    };
    
    const hideDetails = () => {
        setShowContent(false);
    }
    
  return (
    <div>
        {img_src && (
            <Image src={img_src} alt={name} className="cursor-pointer"
            width={200} height={150}
            onClick={showDetails} />
        )}
        <p className='my-2 text-center'>{name}</p>
        {showContent && (
            <div className="absolute top-0 left-0 z-50 grid w-full h-auto p-2 text-black bg-gray-100 md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100">
                <div>
                    {
                        img_src && (         
                            <Image src={img_src} alt={name} width={300} height={200}/>
                        )
                    }
                    <div className='flex justify-center my-4 space-x-3'>
                        <a href={github_url} className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200">
                            <Icons name='twitter' size={23} />
                            <span>Github</span>
                        </a>
                        <a href={deployed_link} className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200">
                            <Icons name='check' size={23} />
                            <span>Project</span>
                        </a>
                    </div>
                </div>
                <div>
                    <h2 className='mb-3 text-xl font-medium md:text-2xl'>{name}</h2>
                    <h3 className='mb-3 font-medium'>{description}</h3>
                    <div className='flex flex-wrap mt-5 space-x-2 text-sm tracking-wider'>
                        {
                            tech_used.map((tech) => (
                                <span key={tech}
                                className="px-2 py-1 my-1 bg-gray-200 rounded-sm dark:bg-dark-200">{tech}</span>
                            ))
                        }
                    </div>
                </div>
                <button className='absolute p-1 rounded-full top-3 right-3 focus:outline-none'
                onClick={hideDetails}>
                    <Icons name='close-modal' size={25} />
                </button>
            </div>
        )}
    </div>
  )
}

export default ProjectCardLayout