import React, { useState } from "react";
import "./Navbar.css";
import { FaRegMoon } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import HireMeForm from "./HireMeForm";

const Navbar = () => {

  const [show, setshow] = useState(false);
  const [form, setform] = useState(false);
  const [icon, seticon] = useState(<FaBars />);

  const handledropDown = () => {
    setshow(!show);
    console.log(show);
    seticon(<RxCross2 />);
    console.log(icon);
  };

  const handleform = () => {
    if (!form) {
      document
        .getElementsByTagName("html")[0]
        .classList.add("overflow-y-hidden");
        console.log(form)
      setform(true);
    }else{
      document
        .getElementsByTagName("html")[0]
        .classList.remove("overflow-y-hidden");
      setform(false);
    }
  };

  return (
    <>
      <div className="Navabar mx-auto px-[6rem] mt-5 max-md:px-2">
        <div className="navbar_1 flex justify-between  ">
          <div className="logo flex items-center">
            <Link
              to="home"
              className="bg-gray-100 text-2xl font-mono p-2 text-purple-900 font-bold rounded-xl "
            >
              Baldev
            </Link>
          </div>

          <div className="nav_list flex items-center max-sm:hidden">
            <ul className="flex justify-center gap-6 text-xl font-semibold  text-gray-800">
              <li>
                <Link to="projects">Projects</Link>
              </li>
              <li>
                <Link to="aboutme">About Me</Link>
              </li>
              <li>
                <Link to="contactme">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="nav_right flex gap-3 items-center">
            <button
              className="hire_button bg-purple-500 py-2 px-4 h-fit  rounded-md text-white font-semibold hover:bg-purple-800 hover:transition-all duration-500 max-md:hidden "
              onClick={handleform}
            >
              {" "}
              Hire Me{" "}
            </button>
            <button className="mode  bg-gray-100 p-3 rounded-md ">
              <FaRegMoon
                className="text-black hover:text-gray-400"
                // onClick={changeTheme}
              />
            </button>
          </div>

          <div className=" hidden max-sm:flex justify-center items-center  ">
            {show === true ? (
              <RxCross2
                className="text-3xl font-bold text-gray-700"
                onClick={handledropDown}
              />
            ) : (
              <FaBars
                className="text-3xl text-gray-700 "
                onClick={handledropDown}
              />
            )}
          </div>
        </div>

        <div className="transitondiv">
          {show === true ? (
            <ul className="text-left mt-3 text-2xl ">
              <li className="my-1 hover:bg-blue-500 hover:text-white  border-b-[1px] border-gray-100 p-3">
                <Link to="projects">Projects</Link>
              </li>
              <li className=" my-1 text-left border-b-[1px]  border-gray-100 p-3">
                <Link to="aboutme">About Me</Link>
              </li>
              <li className=" my-1 text-left border-b-[1px]  border-gray-100 p-3">
                <Link to="contactme">Contact</Link>
              </li>
              <li className="p-3">
                <button
                  className="p-1 px-3  bg-indigo-500  text-white"
                >
                  Hire me
                </button>
              </li>
            </ul>
          ) : (
            ""
          )}
        </div>
      </div>

      <div>
        {form === true ? (
          <HireMeForm  onClose={handleform}
           onRequest={handleform}/>
        ) : null}
      </div>
    </>
  );
};

export default Navbar;
