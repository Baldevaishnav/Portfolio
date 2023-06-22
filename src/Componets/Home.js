import React, { useState } from "react";
import { MdOutlineDownloadForOffline } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import ProjectCard from "./ProjectCard";
import { data } from "./Data";

const Home = () => {
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

  // const search = (e) => {
  //   const newName = e.target.value;
  //   const filtered = data.filter((item) => item.project === newName);
  //   if (filtered.length > 0) {
  //     setMain(filtered);
  //   } else {
  //     setMain(data);
  //   }
  // };

  const [name, setname] = useState("");
  return (
    <div className="mx-auto sm:px-[6rem] max-sm:px-4">
      <section className=" mt-10">
        <div className="flex justify-center max-sm:flex-col ">
          <div className="container flex justify-center items-center ">
            <div>
              <div className="intro text-left text-gray-700 lg:text-4xl md:text-2xl sm:text-xl max-sm:text-3xl ">
                HI, IAM BALDEV <br />
                A Front-End Developer & <br />
                Design Enthusiast
              </div>
              <button className=" flex gap-1 items-center bg-gray-100 px-4 p-3 rounded-md  mt-10 hover:bg-blue-800 hover:transition-all duration-1000 ease-out hover:text-white ">
                <MdOutlineDownloadForOffline className="text-2xl " />
                <span className="text-2xl">Download CV</span>
              </button>
            </div>
          </div>

          <div className="container">
            <img src="/img/developer.ef097afb.svg" className="w-full " alt="" />
          </div>
        </div>
      </section>
      <section className="mt-10">
        <h1 className="text-3xl font-bold  text-gray-900">
          Projects portfolio
        </h1>
        <br />
        <br />
        <p className="text-xl ">
          Search projects by title or filter by category
        </p>{" "}
        <br />
        <div className="flex justify-between mt-5">
          <div className="flex items-center gap-2">
            <div className="search bg-gray-100 p-3 w-fit rounded-lg ">
              <BsSearch />
            </div>
            <input
              type="search"
              name="search"
              id=""
              placeholder="Search projects "
              className="border-gray-300 border-[1px] rounded-lg outline-none p-2 "
              value={name}
              onChange={(e) => {
                setname(e.target.value);
              }}
            />
          </div>

          <div>
            <select
              name="All projects"
              id=""
              placeholder="All projects"
              className="outline-none border-gray-200 border-[1px] rounded-lg p-2"
              onChange={handleSelect}
            >
              <option value="All project">All Projects</option>
              <option value="Web Application">Web Application</option>
              <option value="Mobile Application">Mobile Application</option>
              <option value="UI/ UX Design">UI/ UX Design</option>
            </select>
          </div>
        </div>
        <div>
          <ProjectCard main={main} />
        </div>{" "}
        <br />
        <br />
        <button className="bg-blue-600 p-3 px-6  rounded-xl text-white font-semibold hover:bg-blue-800 transition-all duration-700 ease-in-out">
          More Projects
        </button>
      </section>{" "}
      <br /> <br />
      <hr />
    </div>
  );
};

export default Home;
