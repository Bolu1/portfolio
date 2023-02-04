import React from "react";
import { projects } from "../../data/projects";
import { BiArrowToRight, BiLinkExternal } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";
const MyProjects = () => {
  return (
    <div>
      <div className="w-full h-full py-5 pb-20 text-white bg-black flex lg:hidden">
        <div className="w-full h-full px-3 pt-8">
          <h1 className="text-[42px] font-bold  my-7">My Experiences</h1>
          <div className="w-full mt-6 grid grid-cols-1 gap-y-10">
            {projects.map((project, index) => {
              return (
                <div key={index} className="min-h-[100%]  ">
                  <div className="w-full rounded-xl overflow-hidden bg-gray-200">
                    <img src={project.image} alt="" />
                  </div>
                  <div className="flex justify-between mt-5 items-center">
                    <div className="flex space-x-2 items-end ">
                      <h1 className="text-lg">{project.id}</h1>
                      <h1 className="text-2xl large-texts font-bold">
                        {project.name}
                      </h1>
                    </div>
                    <div className="flex space-x-3">
                      <a href={project.link} target="_blank" rel="noreferrer">
                        <BiLinkExternal className="w-5 h-5" />
                      </a>
                      {project?.githubLink !== undefined ? (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <AiFillGithub className="w-5 h-5" />
                        </a>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-lg">{project.about}</p>
                    <p className="text-lg mt-2">
                      Skills/Tools : {project.tools}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className=" w-full h-full justify-center flex items-center">
            <a
              href="https://github.com/bolu1"
              className="flex space-x-3 text-xl h-full items-center mt-6"
            >
              <span>View more on my Github </span>
              <BiArrowToRight className="animate-bounce w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      <div className="w-full h-full max-w-[75rem] mx-auto py-5 pb-20 text-white bg-black hidden lg:flex">
        <div className="w-full h-full px-3 pt-8">       
          <h1 className="text-[42px] font-bold  my-7">My Experiences</h1>
          <div className="w-full  h-full grid  grid-cols-1 gap-y-16">
            {projects.map((project, index) => {
              return (
                <div
                  key={index}
                  className="h-[100%]  [&:nth-child(2n)]:flex-row-reverse items-center flex justify-between  "
                >
                  <div className="w-[50%] hover:scale-105 transition-all duration-300 h-[20rem] relative rounded-xl overflow-hidden bg-gray-200">
                    <div className="absolute backdrop-blur-xs bg-black/20 w-full h-full top-0 "></div>
                    <img
                      src={project.image}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-col w-[40%] h-full justify-center space-y-6 mt-5 items-center">
                    <div className="flex space-x-2 items-end ">
                      <h1 className="text-lg">{project.id}</h1>
                    </div>
                    <h1 className="text-4xl large-texts font-bold">
                      {project.name}
                    </h1>
                    <p className="text-lg">{project.about}</p>
                    <p className="text-lg mt-2">
                      Skills/Tools : {project.tools}
                    </p>
                    <div className="flex space-x-3">
                      <a target="_blank" rel="noreferrer" href={project.link}>
                        <BiLinkExternal className="w-5 h-5" />
                      </a>
                      {project.githubLink !== undefined ? (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <AiFillGithub className="w-5 h-5" />
                        </a>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                  {/* <div className="w-full h-[20rem] rounded-xl overflow-hidden bg-gray-200">
                    <img
                      src={project.image}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex justify-between mt-5 items-center">
                    <div className="flex space-x-2 items-end ">
                      <h1 className="text-lg">{project.id}</h1>
                      <h1 className="text-2xl large-texts font-bold">
                        {project.name}
                      </h1>
                    </div>
                    <div className="flex space-x-3">
                      <a href="f">
                        <BiLinkExternal className="w-5 h-5" />
                      </a>
                      {project.githubLink !== undefined ? (
                        <a href="f">
                          <AiFillGithub className="w-5 h-5" />
                        </a>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-lg">{project.about}</p>
                    <p className="text-lg mt-2">
                      Skills/Tools : {project.tools}
                    </p>
                  </div> */}
                </div>
              );
            })}
          </div>
          <div className=" w-full h-full justify-center flex items-center">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/bolu1"
              className="flex space-x-3 text-xl h-full items-center mt-6"
            >
              <span>View more on my Github </span>
              <BiArrowToRight className="animate-bounce w-6 h-6" />
            </a>
          </div>

          {/* <div className="w-full mt-6 grid grid-cols-3  gap-5">
            {projects.map((project, index) => {
              return (
                <div key={index} className="min-h-[100%]  ">
                  <div className="w-full h-[20rem] rounded-xl overflow-hidden bg-gray-200">
                    <img
                      src={project.image}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex justify-between mt-5 items-center">
                    <div className="flex space-x-2 items-end ">
                      <h1 className="text-lg">{project.id}</h1>
                      <h1 className="text-2xl large-texts font-bold">
                        {project.name}
                      </h1>
                    </div>
                    <div className="flex space-x-3">
                      <a href="">
                        <BiLinkExternal className="w-5 h-5" />
                      </a>
                      {project?.githubLink !== undefined ? (
                        <a href="">
                          <AiFillGithub className="w-5 h-5" />
                        </a>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-lg">{project.about}</p>
                    <p className="text-lg mt-2">
                      Skills/Tools : {project.tools}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className=" w-full h-full justify-center flex items-center">
            <a
              href="https://github.com/shefihu"
              className="flex space-x-3 text-xl h-full items-center mt-6"
            >
              <span>View more on my Github </span>
              <BiArrowToRight className="animate-bounce w-6 h-6" />
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
