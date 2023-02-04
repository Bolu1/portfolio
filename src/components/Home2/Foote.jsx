import React from "react";
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import dev from "../../assets/icons/dev.png";

const Foote = () => {
  return (
    <div>
      <div className="w-full px-3 flex lg:hidden h-[20rem] bg-black text-white">
        <div className="w-full h-full flex flex-col space-y-8 items-center justify-center">
          <h1 className="text-2xl text-center">       
               "Building software that provide value 🤙"
          </h1>
          <div className="flex space-x-5">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/bolu1"
              className="rounded-full cursor-pointer w-8 h-8 flex justify-center items-center border-gray-500 border hover:bg-black hover:text-white transition ease-in duration-300"
            >
              <AiFillGithub className="w-5 h-5" />
            </a>
            <a
              href="linkedin.com/in/adetifa-boluwatife-819a65201"
              target="_blank"
              rel="noreferrer"
              className="rounded-full cursor-pointer w-8 h-8 flex justify-center items-center border-gray-500 border hover:bg-black hover:text-white transition ease-in duration-300"
            >
              <AiFillLinkedin className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com/AdetifaBolu"
              target="_blank"
              rel="noreferrer"
              className="rounded-full cursor-pointer w-8 h-8 flex justify-center items-center border-gray-500 border hover:bg-black hover:text-white transition ease-in duration-300"
            >
              <AiOutlineTwitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
      <div className="w-full px-3 hidden lg:flex h-[20rem] bg-black text-white">
        <div className="w-full h-full flex flex-col space-y-8 items-center justify-center">
          <h1 className="text-2xl text-center">
            "Building software that provide value 🤙"
          </h1>
          <div className="flex space-x-5">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/bolu1"
              className="rounded-full cursor-pointer w-8 h-8 flex justify-center items-center border-gray-500 border hover:bg-black hover:text-white transition ease-in duration-300"
            >
              <AiFillGithub className="w-5 h-5" />
            </a>
            <a
              href="linkedin.com/in/adetifa-boluwatife-819a65201/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full cursor-pointer w-8 h-8 flex justify-center items-center border-gray-500 border hover:bg-black hover:text-white transition ease-in duration-300"
            >
              <AiFillLinkedin className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com/AdetifaBolu"
              target="_blank"
              rel="noreferrer"
              className="rounded-full cursor-pointer w-8 h-8 flex justify-center items-center border-gray-500 border hover:bg-black hover:text-white transition ease-in duration-300"
            >
              <AiOutlineTwitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Foote;
