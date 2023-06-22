import React from 'react'
import { TbWorld } from "react-icons/tb";
import { FiTwitter } from "react-icons/fi";
import { GrLinkedinOption } from "react-icons/gr";
import { AiOutlineYoutube } from "react-icons/ai";
const Footer = () => {
  return (
    <div className='my-10 p-10'>
           <h1 className='text-3xl'>Follow Me</h1>

           <ul className='flex justify-center gap-10 my-10'>
            <li className='bg-gray-100  p-2 text-gray-400 hover:text-blue-600 hover:bg-gray-100 hover:transition-all duration-1000 ease-in-out rounded-md'><TbWorld className='text-3xl'/></li>
            <li className='bg-gray-100  p-2  text-gray-400 hover:text-blue-600 hover:bg-gray-100 hover:transition-all duration-1000 ease-in-out rounded-md '><FiTwitter className='text-3xl' /></li>
            <li className='bg-gray-100  p-2  text-gray-400 hover:text-blue-600 hover:bg-gray-100 hover:transition-all duration-1000 ease-in-out rounded-md '><GrLinkedinOption className='text-3xl'  /></li>
            <li className='bg-gray-100  p-2  text-gray-400 hover:text-blue-600 hover:bg-gray-100 hover:transition-all duration-1000 ease-in-out rounded-md '><AiOutlineYoutube className=' text-3xl' /></li>
           </ul>
    </div>
  )
}

export default Footer
