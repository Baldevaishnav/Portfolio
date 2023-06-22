import React from 'react'

function AboutMe() {
  return (
    <div>
           <div className='flex justify-center gap-10  my-20 max-md:flex-col max-md:px-5  '>
                 
                <img src="/img/web-project.jpeg" alt=""  className='h-1/5 w-1/5 rounded-xl  border-2 max-md:w-1/2'/>

                <p className='text-left flex items-center text-lg '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti modi possimus, temporibus expedita quia exercitationem.
                     Consequuntur aspernatur quod explicabo illum praesentium in enim natus excepturi magnam, porro ullam illo nam! 
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti modi possimus, temporibus expedita quia exercitationem. 
                     Consequuntur aspernatur quod explicabo illum praesentium in enim natus excepturi magnam, porro ullam illo nam! 
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti modi possimus, temporibus expedita quia exercitationem. 
                     Consequuntur aspernatur quod explicabo illum praesentium in enim natus excepturi magnam, porro ullam illo nam! 
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti modi possimus, temporibus expedita quia exercitationem. 
                     Consequuntur aspernatur quod explicabo illum praesentium in enim natus excepturi magnam, porro ullam illo nam! 
                     </p>
           </div>
            <div className='bg-gray-100 p-24'>
                <ul className='flex justify-between max-md:flex-col gap-20'>
                    <li> 
                         <span className='text-4xl text-gray-800 font-semibold'>12</span>
                         <p className=''>years of expercience</p>
                    </li>
                    <li> 
                         <span className='text-4xl text-gray-800 font-semibold '>20 k+</span>
                         <p>Start on github</p>
                    </li>
                    <li> 
                         <span className='text-4xl text-gray-800 font-semibold'>92%</span>
                         <p>Positive feedback</p>
                    </li>
                    <li> 
                         <span className='text-4xl text-gray-800 font-semibold'>77 %</span>
                         <p>Projects completed </p>
                    </li> 
                </ul>
            </div>
    </div>
  )
}

export default AboutMe
