import React, { FunctionComponent } from 'react'
import { Category } from '../type'



export const ProjectNavItem: FunctionComponent<{
    value: Category | "All"; 
    tabFilterHandler: Function;
    activeTab:string
}> = ({value, tabFilterHandler, activeTab}) => {
    
    let className = "cursor-pointer hover:text-green-200";
    if (activeTab === value)
        className += " text-green-500"
    
  return ( 
   <li className={className}
   onClick={() => tabFilterHandler(value)}
   >{value}
   </li>
  )
}


const ProjectNavComp: FunctionComponent<{
    tabFilterHandler: Function; 
    activeTab:string}> = (props) => {
  return (
    <div className='flex px-3 py-2 space-x-3 overflow-x-auto list-none'>
        <ProjectNavItem  value="All"  {...props} />
        <ProjectNavItem  value="React"  {...props} />
        <ProjectNavItem  value="Web3"  {...props} />
        <ProjectNavItem  value="Node"  {...props} />
        <ProjectNavItem  value="Nextjs"  {...props} />
    </div>
  )
}

export default ProjectNavComp