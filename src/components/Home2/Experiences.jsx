import React, { useState } from "react";
import { projects } from "../../data/experiences";
import { BiArrowToRight, BiLinkExternal } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";
import { formatText } from "../../utils/formatter";
const MyProjects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredProject(index);
  };

  const handleMouseLeave = () => {
    setHoveredProject(null);
  };

  return (
    <div id="experience">
      <div className="flex w-full h-full py-5 pb-20 text-white bg-black lg:hidden">
        <div className="w-full h-full px-3 pt-8">
          <h1 className="text-[32px] large-texts">My Experiences</h1>
          <div className="grid w-full grid-cols-1 mt-6 gap-y-10">
            {projects.map((project, index) => {
              return (
                <div key={index} className="min-h-[100%]  ">
                  <div className="flex items-center justify-between mt-5">
                    <div className="flex items-end space-x-2 ">
                      <h1 className="text-lg">{project.duration}</h1>
                      <a
                        href={project.websiteUrl}
                        target="_"
                        className="text-lg font-bold cursor-pointer hover:underline large-texts"
                      >
                        {project.name}
                      </a>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-lg">{formatText(project.about)}</p>
                    <p className="mt-2 text-lg">
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
          <div className="grid w-full h-full grid-cols-1 gap-y-16">
            {projects.map((project, index) => {
              return (
                <div
                  key={index}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                  className="h-[100%]  [&:nth-child(2n)]:flex-row-reverse items-center flex justify-between  "
                >
                  <div className="flex-col w-[40%] h-full justify-center space-y-6 mt-5 items-center">
                    <div className="flex items-end space-x-2">
                      <h1 className="text-lg">{project.duration}</h1>
                      <h1 className="text-lg italic font-semibold">
                        {project.country}
                      </h1>
                    </div>
                    <div className="flex items-center space-x-5">
                      <h1 className="text-2xl font-bold large-texts">
                        {project.role}
                      </h1>

                      <a
                        dangerouslySetHTML
                        href={project.websiteUrl}
                        target="_"
                        className="text-xl font-medium underline cursor-pointer hover:underline large-texts"
                      >
                        {project.name}
                      </a>
                    </div>
                    <p className="text-lg">{project.about}</p>
                    <p className="mt-2 text-lg">
                      Technologies used : {project.tools}
                    </p>
                  </div>
                  {index === hoveredProject && (
                    <div className=" w-[600px] h-[400px] rounded-lg overflow-hidden">
                      <iframe
                        src={project.websiteUrl}
                        title="Website Preview"
                        href={project.websiteUrl}
                        className="w-full h-full cursor-pointer"
                        loading="eager"
                      ></iframe>
                    </div>
                  )}
                  {/* <div className="w-full h-[20rem] rounded-xl overflow-hidden bg-gray-200">
                    <img
                      src={project.image}
                      alt=""
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex items-center justify-between mt-5">
                    <div className="flex items-end space-x-2 ">
                      <h1 className="text-lg">{project.id}</h1>
                      <h1 className="text-2xl font-bold large-texts">
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
                    <p className="mt-2 text-lg">
                      Skills/Tools : {project.tools}
                    </p>
                  </div> */}
                </div>
              );
            })}
          </div>

          {/* <div className="grid w-full grid-cols-3 gap-5 mt-6">
            {projects.map((project, index) => {
              return (
                <div key={index} className="min-h-[100%]  ">
                  <div className="w-full h-[20rem] rounded-xl overflow-hidden bg-gray-200">
                    <img
                      src={project.image}
                      alt=""
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex items-center justify-between mt-5">
                    <div className="flex items-end space-x-2 ">
                      <h1 className="text-lg">{project.id}</h1>
                      <h1 className="text-2xl font-bold large-texts">
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
                    <p className="mt-2 text-lg">
                      Skills/Tools : {project.tools}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex items-center justify-center w-full h-full ">
            <a
              href="https://github.com/shefihu"
              className="flex items-center h-full mt-6 space-x-3 text-xl"
            >
              <span>View more on my Github </span>
              <BiArrowToRight className="w-6 h-6 animate-bounce" />
            </a>
          </div> */}
        </div>

        {/* {hoveredProject && (
          <div className="fixed bottom-10 right-10 w-[600px] h-[300px] border-2 border-gray-700 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src={hoveredProject}
              title="Website Preview"
              className="w-full h-full"
              frameBorder="0"
            ></iframe>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default MyProjects;
