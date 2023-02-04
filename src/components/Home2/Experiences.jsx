import React from "react";
import { projects } from "../../data/experiences";
import { BiArrowToRight, BiLinkExternal } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";
const MyProjects = () => {
  return (
    <div>
      <div className="w-full h-full py-5 pb-20 text-white bg-black flex lg:hidden">
        <div className="w-full h-full px-3 pt-8">
          <h1 className="text-[32px] large-texts">My Experiences</h1>
          <div className="w-full mt-6 grid grid-cols-1 gap-y-10">
            {projects.map((project, index) => {
              return (
                <div key={index} className="min-h-[100%]  ">
                  
                  <div className="flex justify-between mt-5 items-center">
                    <div className="flex space-x-2 items-end ">
                      <h1 className="text-lg">{project.duration}</h1>
                      <h1 className="text-2xl large-texts font-bold">
                        {project.name}
                      </h1>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-lg">{project.about}</p>
                    <p className="text-lg mt-2">
                    Technologies used : {project.tools}
                    </p>
                  </div>
                </div>
              );
            })}
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
                  <div className="flex-col w-[40%] h-full justify-center space-y-6 mt-5 items-center">
                    <div className="flex space-x-2 items-end ">
                      <h1 className="text-lg">{project.duration}</h1>
                    </div>
                    <div className="flex space-x-5 items-center">

                    <h1 className="text-2xl large-texts font-bold underline">
                      {project.role}
                    </h1>

                    <h1 dangerouslySetHTML className="text-xl large-texts font-medium">
                      {project.name}
                    </h1>

                    </div>
                    <p className="text-lg">{project.about}</p>
                    <p className="text-lg mt-2">
                      Technologies used : {project.tools}
                    </p>
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
