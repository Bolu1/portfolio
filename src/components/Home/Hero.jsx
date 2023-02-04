import React from "react";
import { motion } from "framer-motion";
import reactlogo from "../../assets/icons/logo192.png";
import tailwind from "../../assets/icons/tailwind.png";
import javascript from "../../assets/icons/javascript.png";
import me from "../../assets/images/home/me.png";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiOutlineTwitter,
} from "react-icons/ai";
const Hero = () => {
  const spinTransition = {
    loop: Infinity,
    duration: 15,
    ease: "linear",
  };
  return (
    <div className="bg-gray-100">
      <div className="w-full 2xl:max-w-[110rem] xl:max-w-[85rem] lg:max-w-[55rem] md:max-w-[35rem] mx-auto   h-[50rem] lg:flex hidden">
        <div className="w-full h-[50rem] flex justify-between relative">
          <div className="w-[40rem] h-full flex  flex-col justify-center ">
            <motion.h1 className="title text-[82px] large-texts leading-[2] font-semibold z-40 ">
              {/* <span>Hi</span> */}
              <span>Bolu Adetifa</span>
            </motion.h1>
            <span className="text-2xl">
              I'm a creative Frontend Developer passionate about converting
              ideas into standard and scalable products.
            </span>
            <div className="mt-7 relative">
              <a
                href="#_"
                class="relative inline-flex items-center justify-center w-52 p-4 px-6 py-3 overflow-hidden text-black font-bold transition duration-300 ease-out border border-black rounded-full group"
              >
                <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-gray-300 group-hover:translate-x-0 ease">
                  <svg
                    class="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span class="absolute text-lg flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease">
                  See my works
                </span>
                <span class="relative invisible">Button Text</span>
              </a>
              <div className="w-10 h-40  absolute 2xl:-left-10 lg:left-5 top-32 flex-col space-y-4">
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
              </div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, translateX: 0 }}
            whileInView={{ opacity: 1, translateX: -60 }}
            transition={{ duration: 0.5 }}
            className=" absolute 2xl:w-[35rem] lg:w-[25rem] lg:h-[25rem] 2xl:h-[35rem] bg-white z-20 top-20 2xl:left-[30rem] lg:left-[15rem] rounded-full"
          >
            <div className="absolute 2xl:left-40 xl:left-20 top-10">
              <motion.img
                initial={{ opacity: 0, x: "200px" }}
                animate={{ opacity: 1, x: 0 }}
                src={me}
                alt=""
                // className="animate-bounce lg:animate-ping"
              />
            </div>
          </motion.div>
          {/* <div className="w-[50rem] xl:block hidden   h-full relative">
            <div className="w-14 h-14 rounded-full  absolute right-0 bg-gradient-to-r  from-gray-300  top-40"></div>
            <div className="w-20 h-20 rounded-full  absolute bg-gradient-to-r  from-gray-300  left-7 top-40"></div>

            <div className="w-40 h-40 rounded-full  absolute left-40 top-[75%] bg-gradient-to-r  from-gray-300   "></div>
            <div className="w-full  h-80 absolute 2xl:bottom-40 bottom-64 z-40">
              <div className="w-24 h-24 bg-white shadow-blue  rounded-lg absolute flex justify-center items-center bottom-0">
                <img src={reactlogo} alt="" className="w-14 h-14" />
              </div>
              <div className="w-24 h-24 bg-white shadow-red left-40 rounded-lg absolute bottom-20"></div>
              <div className="w-24 h-24 bg-white shadow-green flex justify-center items-center left-80 rounded-lg absolute bottom-40">
                <img
                  src={tailwind}
                  alt=""
                  className="w-14 object-contain h-14"
                />
              </div>
              <div className="w-24 h-24 bg-white shadow-yellow flex justify-center items-center right-[0rem] rounded-lg absolute bottom-40">
                <img src={javascript} alt="" className="w-14 h-14" />
              </div>
              <div className="w-24 h-24 bg-white shadow-pink right-[12rem] rounded-lg absolute bottom-[13rem]"></div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
