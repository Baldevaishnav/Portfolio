import React from 'react'
import { CiMail,CiLocationOn } from 'react-icons/ci';
import {FiPhone} from 'react-icons/fi';
const Contact = () => {
  return (
    <div className=' flex flex-col-reverse gap-16 mt-24 m-10 p-16 lg:flex-row ' >
           <div className='w-full'>
                 <form action="" className='rounded-lg shadow-2xl text-left p-10 '>
                         <h1 className='text-left text-3xl font-semibold'>Contact Form</h1> <br />   
                         <label htmlFor="" className='text-lg text-gray-800 '>Full Name</label><br />
                         <input type="text" placeholder='Your Name' className='bg-gray-100 p-3 w-full rounded-md outline-none border-[1px]' required /><br /><br />
                         <label htmlFor="" className='text-lg text-gray-800 '>Email</label><br />
                         <input type="email" placeholder='Your email' className='bg-gray-100 p-2 w-full rounded-md outline-none border-[1px] ' required /><br /><br />
                         <label htmlFor="" className='text-lg text-gray-800 '>Subject</label><br />
                         <input type="text" placeholder='subject' className='bg-gray-100 p-2 w-full rounded-md outline-none border-[1px]' required/><br /><br />
                         <label htmlFor="" className='text-lg text-gray-800 '>Message</label> <br />
                         <textarea name="" id="" cols="18" rows="6" className='bg-gray-100 w-full rounded-md my-1 outline-none border-[1px] p-3' required></textarea> <br /><br />

                         <button className='bg-blue-500 hover:bg-blue-800 hover:transition-all duration-1000 ease-in-out p-4 rounded-lg text-white'>Send Message</button>
                 </form>
           </div>
            <div className='w-full text-left p-2'>
                  <h1 className='text-2xl font-semibold'> Contact details</h1>
                  <ul className='text-2xl font-light text-gray-500'>
                    <li className='flex items-center my-2 gap-2'><CiLocationOn/> At post Unai, Navasari, India  </li>
                    <li className='flex items-center my-2 gap-2 '><CiMail/> vaishnavbaldev007@gmail.com </li>
                    <li className='flex items-center my-2 gap-2'><FiPhone/> 8980242101</li>
                  </ul>
            </div>
    </div>
  )
}

export default Contact
