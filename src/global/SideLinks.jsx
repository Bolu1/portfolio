import React, { useEffect, useState } from "react";
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import dev from "../assets/icons/dev.png";

const SideLinks = () => {
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
      <div
        className={`${
          isScrolled &&
          "w-10 h-40  fixed z-20 2xl:-left-10 lg:left-5 bottom-10 flex-col space-y-4"
        }`}
      >
        <div
          href="#_"
          class="rounded-full cursor-pointer w-8 h-8 flex justify-center items-center border-gray-500 border hover:bg-black hover:text-white transition ease-in duration-300"
        >
          <AiFillGithub className="w-5 h-5" />
        </div>
        <div
          href="#_"
          class="rounded-full cursor-pointer w-8 h-8 flex justify-center items-center border-gray-500 border hover:bg-black hover:text-white transition ease-in duration-300"
        >
          <AiFillLinkedin className="w-5 h-5" />
        </div>
        <div
          href="#_"
          class="rounded-full cursor-pointer w-8 h-8 flex justify-center items-center border-gray-500 border hover:bg-black hover:text-white transition ease-in duration-300"
        >
          <AiOutlineTwitter className="w-5 h-5" />
        </div>
        <div
          href="#_"
          class="rounded-full cursor-pointer w-8 h-8 flex justify-center items-center border-gray-500 border hover:bg-black hover:text-white transition ease-in duration-300"
        >
          <img src={dev} alt="" className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
};

export default SideLinks;
