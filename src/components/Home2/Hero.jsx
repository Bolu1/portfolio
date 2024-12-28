import React, { useEffect, useRef, useState } from "react";
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import mars from "../../assets/images/home/mars.jpg";
import neptune from "../../assets/images/home/neptune.jpg";
import sp from "../../assets/images/home/sp.jpg";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import dev from "../../assets/icons/dev.png";
import SmoothScroll from "../../global/SmoothScroll";
import { eventWrapper } from "@testing-library/user-event/dist/utils";
const blinkVariants = {
  closed: {
    scaleY: 0,
    transition: { duration: 0.1 },
  },
  open: {
    scaleY: 1,
    transition: { duration: 0.1 },
  },
};
const Hero = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.pageYOffset <= 4450);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);
  const [isOpen, setIsOpen] = useState(true);
  const eyeRef = useRef(null);
  const retinaRef = useRef(null);
  const blink = useAnimation();

  // useEffect(() => {
  //   const handleMouseMove = (e) => {
  //     setCursorX(e.clientX);
  //     setCursorY(e.clientY);
  //   };
  //   document.addEventListener("mousemove", handleMouseMove);
  //   return () => {
  //     document.removeEventListener("mousemove", handleMouseMove);
  //   };
  // }, []);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setIsOpen(!isOpen);
  //   }, 2000);
  //   return () => clearInterval(interval);
  // }, [isOpen]);

  // useEffect(() => {
  //   const retina = retinaRef.current;
  //   const eye = eyeRef.current;
  //   if (!eye || !retina) return;
  //   const eyeBox = eye.getBoundingClientRect();
  //   const x = cursorX - eyeBox.left - eyeBox.width / 2;
  //   const y = cursorY - eyeBox.top - eyeBox.height / 2;
  //   retina.style.transform = `translate(${x}px, ${y}px)`;
  // }, [cursorX, cursorY]);

  useEffect(() => {
    const eye = document.querySelectorAll(".eyes");
    document
      .querySelector("body")
      .addEventListener("mousemove", handleMouseMove);

    function handleMouseMove(e) {
      eye.forEach((eye) => {
        let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
        let y = eye.getBoundingClientRect().top + eye.clientHeight / 2;
        let radian = Math.atan2(e.pageX - x, e.pageY - y);
        let rotate = radian * (180 / Math.PI) * -1 + 270;
        eye.style.transform = `rotate(${rotate}deg)`;
      });
    }
    return () => {
      document
        .querySelector("body")
        .removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="w-full text-white bg-black ">
      <AnimatePresence exitBeforeEnter>
        {/* mobile */}
        <div className="w-full h-[45rem] relative lg:hidden flex pt-20 bg-black text-white">
          <div className="flex flex-col justify-center w-full h-full space-y-10">
            <div className="w-full h-[14rem] ">
              <motion.h1
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="text-[42px] font-[600] text-center large-texts "
              >
                Bolu Adetifa
              </motion.h1>
              <motion.p
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className=" text-[20px] text-center"
              >
                A software engineer passionate about building full-stack software using modern technologies, with a primary focus on backend engineering. Driven by a commitment to developing software products that provide meaningful value to users. Proficient in Rust, Typescript, Python, and Java, and skilled in creating scalable and efficient systems.
              </motion.p>
            </div>
            <div className="w-full h-[20rem]  flex justify-center  ">
            <div className="my-[10rem]  lg:max-w-[20.5rem] max-w-[20.5rem] ">
                <img src={mars} />
              </div>
            </div>
          </div>


        </div>
        {/* desktop */}
        {/* <SmoothScroll> */}
        <div className="w-full h-[45rem] lg:flex hidden mx-auto 2xl:max-w-[90rem] lg:max-w-[75rem]">
          <div className="flex items-center justify-between w-full h-full pt-20 lg:px-6 xl:px-0">
            <div className="w-[47%] h-[20rem]  ">
              <div className="flex items-center space-x-4">
                <motion.h1
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="lg:text-[50px] xl:text-[82px] font-[600]  large-texts "
                >
                  Bolu Adetifa
                </motion.h1>
              </div>
              <motion.p
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className=" text-[20px] "
              >
                A software engineer passionate about building full-stack software using modern technologies, with a primary focus on backend engineering. Driven by a commitment to developing software products that provide meaningful value to users. Proficient in Rust, Typescript, Python, and Java, and skilled in creating scalable and efficient systems.
              </motion.p>
            </div>
            <div className="w-[50%] h-[35rem] flex justify-center items-center">
              <div className=" lg:max-w-[20.5rem] max-w-[20.5rem] ">
                <img src={mars} />
              </div>
            </div>
          </div>
        </div>
        {/* </SmoothScroll> */}
      </AnimatePresence>
    </div>
  );
};

export default Hero;
//  <motion.div
//    ref={eyeRef}
//    animate={isOpen ? "open" : "closed"}
//    variants={blinkVariants}
//    style={{
//      width: "60px",
//      height: "35px",
//      background: "white",
//      borderRadius: "50%",
//      transform: "rotate(15deg)",
//      overflow: "hidden",
//      position: "relative",
//    }}
//  >
//    <motion.div
//      ref={retinaRef}
//      style={{
//        width: "20px",
//        height: "20px",
//        background: "black",
//        borderRadius: "50%",
//        position: "absolute",
//        top: 0,
//        left: 0,
//        transform: "translate(0, 0)",
//      }}
//    />
//  </motion.div>;
