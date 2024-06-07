import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import resume from "../assets/pdf/BoluAdetifaResume.pdf";
import { HiMenuAlt2 } from "react-icons/hi";
import Sidebar from "./Sidebar";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else setIsScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <header
        className={`w-full  text-white ${
          isScrolled && "bg-black text-gray-200"
        }`}
      >
        <div className="w-full h-full flex justify-between items-center 2xl:max-w-[110rem] max-w-[85rem] mx-auto">
          <div className="md:flex hidden items-center space-x-2 md:space-x-10">
            <h1 className="xl:text-4xl lg:text-3xl text-4xl font-bold ">
              BOLU
            </h1>
          </div>

          <ul className="hidden items-center space-x-10 md:flex">
            <li className="headerLink">
              <a href="#">Home</a>
            </li>
            <li className="headerLink">
              <a href="#about">About</a>
            </li>
            <li className="headerLink">
              <a href="#works">Works</a>
            </li>
            <li className="headerLink">
              <a href="#experience">Experience</a>
            </li>
            <li className="headerLink">
              <a href="#contact">Contact</a>
            </li>

  <a
              href="https://docs.google.com/document/d/1o7UQG8fySF2Uu82c19je_sVvQKJoxDqcnenoOPVNIH8/edit?usp=sharing"
              target="_blank"
              >
            <a
              
              class="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group"
            >
              <span class="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-white via-white to-white group-hover:opacity-100"></span>
              <span class="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>

              <span class="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>

              <span class="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>

              <span class="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
              <span class="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
              <span class="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
              <span class="relative group-hover:text-black">Resume</span>
            </a>
            </a>
          </ul>
        </div>
        <div className="flex md:hidden justify-between items-center space-x-2 md:space-x-10">
          <h1 className="xl:text-4xl lg:text-3xl text-4xl font-bold ">BOLU</h1>
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="">
            <HiMenuAlt2 className="w-7 h-7" />
          </button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
