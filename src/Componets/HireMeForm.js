import React from "react";
import { RxCross2 } from "react-icons/rx";

const HireMeForm = ({ onClose , onRequest }) => {
   const handleSelect =()=>{
        
   }
  return (
    
      <div className="h-full w-full transition duration-500 z-30 ">
        <div className="bg-black ng-filter h-full w-full inset-0 z-20 bg-opacity-50 ">
          <main className="h-full w-full flex flex-col justify-center  items-center">
            <div className="bg-white rounded-lg  p-10">
              <form action="p-20">
                <div className="flex justify-between border-b-[1px] p-1">
                  <h1>What project are you looking for?</h1>
                  <button onClick={onClose} >
                  <RxCross2 className="font-bold text-xl"  />

                  </button>
                </div>
                <br />
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  id="input_name"
                  className="bg-gray-100 outline-none p-3 w-96 border-[1px] rounded-lg "
                />{" "}
                <br />
                <br />
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  id="input_email"
                  className="bg-gray-100 outline-none p-3 w-96 border-[1px] rounded-lg"
                />
                <br />
                <br />
                <select
                  name="projects"
                  id="select_project"
                  className="bg-gray-100 outline-none p-1 w-96 border-[1px] rounded-lg"
                
                >
                  <br />
                  <br />
                  <option value="projects">Projects</option>
                  <option value="web application">web application</option>
                  <option value="Mobile Application">Mobile Application</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                </select>{" "}
                <br />
                <br />
                <textarea
                  name="message"
                  placeholder="Message"
                  id=""
                  cols="30"
                  rows="6"
                  className="border-[1px] rounded-lg w-96 p-1"
                ></textarea>
                <br />
                <br />
                <div className="flex">
                  <button className="bg-indigo-600 text-white hover:bg-indigo-800 duration-700 p-2 px-3 rounded-lg" onClick={onRequest}>
                    Request
                  </button>
                </div>{" "}
                <br />
                <div className="flex justify-end">
                  <button className="bg-gray-400 hover:bg-gray-600 duration-700 p-1 px-3 rounded-lg text-white " onClick={onClose}>
                    Close
                  </button>
                </div>
              </form>
            </div>
          </main>
        </div>
      </div>
    
  );
};

export default HireMeForm;
