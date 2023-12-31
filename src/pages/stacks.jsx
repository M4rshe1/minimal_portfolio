import React from "react";
import Title from "../components/title.jsx";
import StackItem from "../components/stackItem.jsx";
import projects from "../data/projects.js";


const StacksPage = () => {
    let stacks = [];

    projects.forEach((project) => {
        project.stack.forEach((stack) => {
            if (!stacks.includes(stack.text)) {
                stacks.push(stack);
            }
        })
    })

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center">
                <Title>
                    Stacks
                </Title>
                <div className="flex gap-2 items-center flex-wrap">
                    {
                        stacks.map((stack, index) => {
                            return (
                                <StackItem
                                    key={index}
                                    text={stack.text}
                                    color={stack.color}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default StacksPage;