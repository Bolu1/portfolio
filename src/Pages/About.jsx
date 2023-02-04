import React from "react";
import Navbar from "../layout/Navbar";
import { motion, useIsPresent, useScroll, useSpring } from "framer-motion";
const About = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const isPresent = useIsPresent();

  return (
    <div>
      <Navbar />
      <div className="w-full xl:max-w-[75rem] bg-gray-300 2xl:max-w-[110rem] mx-auto h-[60rem] py-20">
        <div className="w-full h-[35rem] flex justify-between bg-yellow-300">
          <div className="w-[40%] h-[20rem] bg-red-300"></div>
        </div>
      </div>{" "}
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{
          scaleX: 0,
          transition: { duration: 1.7, delay: 0.7, ease: "circOut" },
        }}
        exit={{
          scaleX: 1,
          transition: { duration: 1.7, ease: "circIn" },
        }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="privacy-screen"
      />
    </div>
  );
};

export default About;
