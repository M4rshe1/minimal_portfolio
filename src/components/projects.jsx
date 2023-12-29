import React from "react";
import projects from "../data/projects.js";
import ProjectItem from "./projectItem.jsx";
import Subtitle from "./subtitle.jsx";

const otherProjects =    {
    title: "Other Project (Website)",
    imgUrl: "/assets/projects/thumbnail-other-projects.png",
    url: "/projects",
    stack: [{text:"More of me", color: "darkgreen"}, {text: "...", color: "darkgray"}]

}

const Projects = () => {
    // Limit the number of items to display to a maximum of 6
    const limitedPortfolio = projects.slice(0, 5);

    return (
        <div className="flex flex-col items-center justify-center">
            <Subtitle id="portfolio">Projects</Subtitle>
            <div className="flex flex-col items-center justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {limitedPortfolio.map((project) => {
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
                    
                    <ProjectItem 
                        key={otherProjects.title}
                        imgUrl={otherProjects.imgUrl}
                        title={otherProjects.title}
                        stack={otherProjects.stack}
                        url={otherProjects.url}
                        status={1}
                    />
                </div>
            </div>
        </div>
    )
}

export default Projects;
