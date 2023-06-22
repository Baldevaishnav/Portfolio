import { type } from '@testing-library/user-event/dist/type'
import React from 'react'
import {data } from './Data'

const ProjectCard = ({ main }) => {
  return (
    <div className='grid grid-cols-3 gap-10 mt-10 lg:grid-cols-3 sm:grid-cols-2 max-sm:grid-cols-1'> 
        {main.map(item =>{
             return(
                <div className=' rounded-xl shadow-lg hover:shadow-xl'>
                <div className='flex justify-center '>
                   <img src={item.img} className='rounded-t-xl' />
                </div>
                <div className='p-4'>
                    <span className='text-xl'>{item.project}</span><br />
                    <span className='text-lg '>{item.type}</span>
                </div>
          </div>
             )
        })}
       
    </div>
  )
}

export default ProjectCard
