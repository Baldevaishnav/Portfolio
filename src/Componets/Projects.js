import React, { useState } from 'react'
import { BsSearch } from "react-icons/bs";
import ProjectCard from './ProjectCard';
import { data } from './Data';
const Projects = () => {
  
  const [projectName, setProject] = useState("All Projects");
  const [main, setMain] = useState(data);


  const handleSelect = (e) => {
    const newitem = e.target.value;
    const filtered = data.filter((item) => item.type == newitem);

    if (filtered.length == 0) {
      setMain(data);
      console.log(true);
    } else {
      setMain(filtered);
    }
  };
  
  return (
    <div className='mt-16 mx-auto md:px-[6rem] max-md:px-10 sm:px-5'>
          <div>
          <section className="mt-10">
              <h1 className="text-3xl font-bold  text-gray-900">Projects portfolio</h1>
               <p className="text-xl my-10">Search projects by title or filter by category</p>
              <div className="flex justify-between ">
                    <div className="flex items-center gap-2">
                         <div className="search bg-gray-100 p-3 w-fit rounded-lg ">
                          <BsSearch/>  
                         </div>
                         <input type="search" name="search" id="" placeholder="Search projects"
                         className="border-gray-300 border-[1px] rounded-lg outline-none p-2 "/>
                    </div>

                    <div> 
                         <select name="All projects" id="" placeholder="All projects"  onChange={handleSelect}
                          className="outline-none border-gray-200 border-[1px] rounded-lg p-2">
                          <option value="All project">All Projects</option>
                          <option value="Web Application">Web Application</option>
                          <option value="Mobile Application">Mobile Application</option>
                          <option value="UI/ UX Design">UI/ UX Design</option>
                         </select>
                    </div>  
              </div>
                <div> 
                    <ProjectCard main={main} />
                </div> <br /><br />

                <button className="bg-blue-600 p-3 px-6  rounded-xl text-white font-semibold hover:bg-blue-800 transition-all duration-700 ease-in-out">More Projects</button>
       </section> <br /> <br />
       <hr />

          </div>
    </div>
  )
}

export default Projects
