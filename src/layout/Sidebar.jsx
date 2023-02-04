import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { IoCloseCircle } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import resume from "../assets/pdf/BoluAdetifaResume.pdf";
const Sidebar = ({ setIsSidebarOpen, isSidebarOpen }) => {
  const location = useLocation();
  const sidebarVariant = {
    open: {
      x: 0,
      transition: {
        duration: 0.2,
      },
    },
    closed: {
      x: "100%",
      transition: {
        duration: 0.45,
      },
    },
  };

  const listvariants = {
    open: {
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.1, staggerDirection: -1 },
    },
  };
  const itemvariants = {
    open: {
      // x: 0,
      x: [0, 20, 0],
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      x: -50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  return (
    <div>
      {" "}
      <motion.aside
        animate={isSidebarOpen ? "open" : "closed"}
        // initial={"closed"}
        variants={sidebarVariant}
        className={`fixed top-0 bottom-0 right-0 w-[100vw] h-[100vh] z-[60] max-w-[400px] backdrop-blur-md bg-black/80 overflow-hidden md:hidden }`}
      >
        <div className="py-[2rem] flex flex-col items-center justify-center w-full h-full">
          <button
            onClick={() => {
              setIsSidebarOpen(!isSidebarOpen);
            }}
            className="flex top-10 absolute justify-end w-full mb-[4rem] pr-[2rem]"
          >
            <AiOutlineClose className="w-6 h-6 text-white" />
          </button>
          <motion.nav>
            <motion.ul className="" variants={listvariants}>
              <motion.li
                variants={itemvariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                // animate={isSidebarOpen && "closed"}
                onClick={() => {
                  setIsSidebarOpen(!isSidebarOpen);
                }}
                className={`relative w-full mb-[1.5rem] ${
                  location.pathname === "/" ? "activeLink" : ""
                }`}
              >
                <Link to={"/"}>
                  <motion.a className="text-[#ddd] text-[1.3rem] tracking-[2.7px] uppercase">
                    <span className="text-white  mr-[11px]">00</span> Home
                  </motion.a>
                </Link>
              </motion.li>
              <motion.li
                onClick={() => {
                  setIsSidebarOpen(!isSidebarOpen);
                }}
                variants={itemvariants}
                className={`relative w-full mb-[1.5rem] ${
                  location.pathname === "/about" ? "activeLink" : ""
                }`}
              >
                <a
                  download="Shefiu Balogun Resume"
                  href={resume}
                  className="text-[#ddd] text-[1.3rem] tracking-[2.7px] uppercase"
                >
                  <span className="text-white  mr-[11px]">01</span> Resume
                </a>
              </motion.li>
            </motion.ul>
            <motion.div className="w-full  h-10 border-t border-t-gray-200"></motion.div>
          </motion.nav>
        </div>
      </motion.aside>
    </div>
  );
};

export default Sidebar;
