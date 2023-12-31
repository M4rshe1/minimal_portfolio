import React from "react";
import {Link} from "react-router-dom";
import StackItem from "./stackItem.jsx";

const statusColors = {
    0: {
        bg: "bg-red-700",
        text: "This has not been started yet."
    },
    1: {
        bg: "bg-green-500",
        text: "This is in progress."
    },
    2: {
        bg: "bg-yellow-500",
        text: "This is on hold."
    },
    3: {
        bg: "bg-blue-500",
        text: "This is no longer being worked on."
    },
}

const ProjectItem = ({imgUrl, title, stack, url, status}) => {
    return (
        <div
            className="border-2 border-gray-900 rounded-md dark:border-white overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out"
            title={statusColors[status].text}
        >
            <img
                src={imgUrl}
                alt="Image"
                className="w-full h-36 object-cover object-center"
            />
            <div className="w-full p-4">
                <h3 className="relative text-lg md:text-xl mb-2 md:mb-3 font-semibold flex flex-row justify-between items-center">
                    <Link
                        rel="noreferrer"
                        to={url}
                        className="hover:underline cursor-pointer"    
                    >
                        {title}
                    </Link>
                    <span
                        className="relative h-3 w-3"
                    >
                        <span
                            className={`rounded-full absolute inset-0 bg-opacity-50 ${statusColors[status].bg} animate-ping`}
                        ></span>
                        <span
                            className={`rounded-full absolute inset-0 ${statusColors[status].bg}`}
                        ></span>
                    </span>
                </h3>
                <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xm md:text-sm">
                    {stack.map((item, index) => (
                        <StackItem
                            text={item.text}
                            color={item.color}
                            key={index}
                        />
                    ))}
                </p>
            </div>
        </div>
    )
}

export default ProjectItem