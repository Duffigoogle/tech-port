import { FunctionComponent } from "react"
import { ISkills } from '../type';
import Icons from './Icons';

const Bar:FunctionComponent<{
    data: ISkills
}> = ({data:{name, level, icon_name}}) => {
  return (
    <div className="my-2 text-white bg-gray-300 rounded-full dark:bg-dark-300">
        <div className="flex items-center px-4 py-1 bg-gray-500 rounded-full"
        style={{ width: level}}>
            <Icons name={icon_name} />
             {name}
        </div>
    </div>
  )
}

export default Bar