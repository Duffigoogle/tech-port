import React from 'react'
import { FunctionComponent } from 'react'
import { IService } from '../type';
import Icons from './Icons';


const ItemCard: FunctionComponent<{item: IService}> = ({
    item: {title, content, icon_name}}) => {
        
    const createMarkup = () => {
        return {
            __html: content,
        }
    }
    
  return (
    <div className='flex items-center p-2 space-x-4'>
        <Icons name={icon_name} size={28}className=""/>
        <div className='w-full'>
            <h4 className='font-bold font-courgette'>{title}</h4>
            <p dangerouslySetInnerHTML={createMarkup()} />
        </div>
    </div>
  )
}

export default ItemCard