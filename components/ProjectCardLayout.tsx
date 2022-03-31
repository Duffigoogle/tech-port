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
            <div className="grid md:grid-cols-2">
                <div>
                    {
                        img_src && (         
                            <Image src={img_src} alt={name} width={150} height={120}/>
                        )
                    }
                    <div>
                        <a href={github_url}>
                            <Icons name='twitter' size={23} />
                            <span>Github</span>
                        </a>
                        <a href={deployed_link}>
                            <Icons name='check' size={23} />
                            <span>Project</span>
                        </a>
                    </div>
                </div>
                <div>
                    <h2>{name}</h2>
                    <h3>{description}</h3>
                    <div>
                        {
                            tech_used.map((tech) => (
                                <span key={tech}>{tech}</span>
                            ))
                        }
                    </div>
                </div>
                <button onClick={hideDetails}>
                    <Icons name='close-modal' size={25} />
                </button>
            </div>
        )}
    </div>
  )
}

export default ProjectCardLayout