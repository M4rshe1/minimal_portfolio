import React from "react";
import projects from "../data/projects.js";
import ProjectItem from "../components/projectItem.jsx";
import Title from "../components/title.jsx";

const Projects = () => {
  return (
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
            <Title>
                Projects
            </Title>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project) => {
              return (
                  <ProjectItem
                      key={project.title} // Ensure each item has a unique key
                      imgUrl={project.imgUrl}
                      title={project.title}
                      stack={project.stack}
                      url={project.url}
                      status={project.status}
                  />
              )
            })}
          </div>
        </div>
      </div>
  )
}

export default Projects;
