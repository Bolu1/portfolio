import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useIsPresent } from "framer-motion";
const Spinner = () => {
  const [filled, setFilled] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  // const [countdownFinished, setCountdownFinished] = useState(false);
  useEffect(() => {
    if (filled < 100 && isRunning) {
      setTimeout(() => setFilled((prev) => (prev += 1)), 25);
    }
    // if (filled === 100) {
    //   setIsRunning(false);
    //   setCountdownFinished(true);
    // }
  }, [filled, isRunning]);
  const isPresent = useIsPresent();
  return (
    <div>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div className=" w-full h-screen flex space-x-4 flex-col justify-center items-center bg-black">
          {/* <div className="w-60 bg-gray-300 h-10 rounded-l-xl rounded-r-xl"></div> */}
          <div className="hexathron w-full "></div>
          <div className=" flex space-x-4">
            <h1 className="text-white text-3xl">Hex </h1>
            <motion.span
              className="text-white text-4xl"
              whileInView={() => {
                setIsRunning(true);
              }}
            >
              ({filled}%)
            </motion.span>
          </div>
        </motion.div>
        {/* {countdownFinished && (
          <motion.div
            initial={{ scaleX: 1 }}
            animate={{
              scaleX: 0,
              transition: { duration: 1.7, delay: 0.1, ease: "circOut" },
            }}
            exit={{
              scaleX: 1,
              transition: { duration: 1.7, ease: "circIn" },
            }}
            style={{ originX: isPresent ? 0 : 1 }}
            className="privacy-screen"
          />
        )} */}
      </AnimatePresence>
    </div>
  );
};

export default Spinner;
