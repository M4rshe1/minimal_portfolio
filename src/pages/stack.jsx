import React from "react";
import Title from "../components/title.jsx";
import projects from "../data/projects.js";
import ProjectItem from "../components/projectItem.jsx";
import {useParams} from "react-router-dom";


const StackPage = () => {

    let sortedProjects = [];
    
    const {stackID} = useParams()
    

    projects.forEach((project) => {
        project.stack.forEach((stack) => {
            if (stack.text === stackID) {
                sortedProjects.push(project);
            }
        })
    })


    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center">
                <Title>
                    Stack: {stackID}
                </Title>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {sortedProjects.map((project) => {
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

export default StackPage;