import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { story } from "../../data/mystory";
const MyStory = () => {
  //   const [index, setIndex] = useState(1);
  //   const [joinedDetails, setJoinedDetails] = useState("");
  //   const services = story[index];
  //   const setLimit = (number) => {
  //     if (number > story.length - 1) {
  //       number = 0;
  //     }
  //     if (number < 0) {
  //       number = story.length - 1;
  //     }
  //     return number;
  //   };

  //   const stor = (i) => {
  //     setIndex(setLimit(i + 1));
  //     const currentDetails = story[index].details;
  //     setJoinedDetails(currentDetails);
  //   };
  const variants = {
    initial: {
      y: 50,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };
  return (
    <div>
      <AnimatePresence>
        <div className="w-full relative h-full bg-gray-100 py-6 flex lg:hidden">
          <div className="w-full  flex flex-col  px-3 h-full pb-3 ">
            <h1 className="text-[23px] uppercase large-texts font-bold">
              My <br />
              Story
            </h1>
            <motion.p
              variants={variants}
              initial="initial"
              whileInView="animate"
              className="text-[18px] mt-4"
            >
              Hello! My name is <span className="font-bold">Shefiu</span>, I
              enjoy converting ideas into real life products and building
              solutions that runs on the internet. Over the last 3 years, i've
              developed products for businesses around the world, providing
              solutions on small business websites to enteprise web applications
              with focus on quality, accessibility and fast user experiences.
            </motion.p>
            <motion.p
              variants={variants}
              initial="initial"
              whileInView="animate"
              className="text-[18px] mt-2 "
            >
              I have had the great priviledge to work as a Frontend engineer for
              a Trading agency, an event organizing agency, an Architectural
              showcase agency, internal management applications and others.
              Fast-Forward to today, I work as a Frontend engineer at ECSCORP,
              building accessible digital experience to connect businesses that
              require their services.
            </motion.p>
            <motion.p
              variants={variants}
              initial="initial"
              whileInView="animate"
              className="text-[18px] mt-2 "
            >
              I believe giving is receiving, so I give back to the Tech
              ecosystem by building the community, Techers, where individuals
              building a career in the Tech space support eachother and I share
              software development articles & resources on my online platforms.
            </motion.p>
            <motion.p
              variants={variants}
              initial="initial"
              whileInView="animate"
              className="text-[18px] mt-2"
            >
              What I work with: <br />
              Languages: Html, Css, Sass, Javascript, Typescript.
              <br />
              Technologies: React.js, Next.js, Gatsby.js, SCSS, Tailwind,
              Firebase, Git, Netlify, Vercel.
            </motion.p>
            {/* <div className="w-full h-full flex flex-col mt-10 items-center">
            <div className="w-[19rem] border-b-2 flex  justify- border-b-white h-2  ">
              {story.map((project, i) => {
                let active;
                let activeText;
                if (i === index) {
                  active = "active";
                  activeText = "activeText";
                }
                return (
                  <div key={i} className=" w-full relative">
                    <div
                      onClick={() => {
                        stor(i);
                      }}
                      className={`absolute h-3 w-3 top-[0px] bg-gray-300 rounded-full scale-[0.99] transition ease-in duration-100 ${active} `}
                    ></div>
                    <h1 className={`${activeText} pl-10 text-white `}>
                      {project.projectName}
                    </h1>
                  </div>
                );
              })}
            </div>
            <div className="w-full h-20 mt-14  bg-amber-600">
              <p>{joinedDetails}</p>
            </div>
          </div> */}
          </div>
          <div className="w-5 h-5 rounded-full   absolute left-2 bg-gradient-to-r  from-gray-300 "></div>
          <div className="w-10 h-10 rounded-full   absolute right-2 bg-gradient-to-r  from-gray-300 top-60"></div>
          <div className="w-10 h-10 rounded-full   absolute left-32 bg-gradient-to-r  from-gray-300 top-[30rem]"></div>
          <div className="w-10 h-10 rounded-full   absolute right-2 bg-gradient-to-r  from-gray-300 top-[53rem]"></div>
        </div>
        {/* desktop */}
        <div className="w-full relative h-full bg-black text-white py-6  lg:flex hidden justify-center">
          <div className="w-full xl:max-w-[85rem] text-center mx-auto px-3 h-full pb-3 ">
            <h1 className="text-[28px] uppercase large-texts mt-4 font-bold">
              My 
              Story
            </h1>
            <div className="w-full text-center">
              <motion.p
                variants={variants}
                initial="initial"
                whileInView="animate"
                className="text-[24px] mt-4 text-center"
              >
                Hello! My name is <span className="font-bold">Bolu</span>, I
                enjoy converting ideas into real life products and building
                solutions that runs on the internet. Over the last 3 years, i've
                developed products for businesses around the world, providing
                solutions on small business websites to enteprise web
                applications with focus on quality, accessibility and fast user
                experiences.
              </motion.p>
              <motion.p
                variants={variants}
                initial="initial"
                whileInView="animate"
                className="text-[24px] mt-4 "
              >
                I have had the great priviledge to work as a Frontend engineer
                for a Trading agency, an event organizing agency, an
                Architectural showcase agency, internal management applications
                and others. Fast-Forward to today, I work as a Frontend engineer
                at ECSCORP, building accessible digital experience to connect
                businesses that require their services.
              </motion.p>
              <motion.p
                variants={variants}
                initial="initial"
                whileInView="animate"
                className="text-[24px] mt-4"
              >
                I believe giving is receiving, so I give back to the Tech
                ecosystem by building the community, Techers, where individuals
                building a career in the Tech space support eachother and I
                share software development articles & resources on my online
                platforms.
              </motion.p>
              <motion.p
                variants={variants}
                initial="initial"
                whileInView="animate"
                className="text-[24px] mt-4"
              >
                What I work with: <br />
                Languages: Html, Css, Sass, Javascript, Typescript.
                <br />
                Technologies: React.js, Next.js, Gatsby.js, SCSS, Tailwind,
                Firebase, Git, Netlify, Vercel.
              </motion.p>
            </div>
            {/* <div className="w-full h-full flex flex-col mt-10 items-center">
            <div className="w-[19rem] border-b-2 flex  justify- border-b-white h-2  ">
              {story.map((project, i) => {
                let active;
                let activeText;
                if (i === index) {
                  active = "active";
                  activeText = "activeText";
                }
                return (
                  <div key={i} className=" w-full relative">
                    <div
                      onClick={() => {
                        stor(i);
                      }}
                      className={`absolute h-3 w-3 top-[0px] bg-gray-300 rounded-full scale-[0.99] transition ease-in duration-100 ${active} `}
                    ></div>
                    <h1 className={`${activeText} pl-10 text-white `}>
                      {project.projectName}
                    </h1>
                  </div>
                );
              })}
            </div>
            <div className="w-full h-20 mt-14  bg-amber-600">
              <p>{joinedDetails}</p>
            </div>
          </div> */}
          </div>
        </div>
      </AnimatePresence>
    </div>
  );
};

export default MyStory;
