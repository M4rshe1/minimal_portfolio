import React from "react";
import {NavLink} from "react-router-dom";

const links = [
    {
        to: "/projects",
        text: "projects"
    },
    {
        to: "/stacks",
        text: "stacks"
    },
    {
        to: "https://github.com/M4rshe1",
        text: "github"
    },
]

function Header() {
    return (
        <header className="flex flex-row justify-between items-center py-4 md:text-xl text-sm">
            <div className="flex flex-row items-center gap-4">
                <NavLink 
                    key="0"
                    to="/"
                    className="dark:bg-orange-300 bg-violet-300 text-white px-2 rounded-sm" 
                >
                    [colin.heggli.dev] $
                </NavLink>
                {
                    links.map((link, index) => (
                        <NavLink
                            key={index + link.text}
                            to={link.to}
                        >
                            ./ <span className="underline hover:text-black dark:hover:text-white">{link.text}</span>
                        </NavLink>
                    ))
                }
                {/*<NavLink to="/" className="text-xl font-semibold hover:text-black dark:hover:text-white">./ <span>home</span></NavLink>*/}
                {/*<NavLink to="/projects" className="text-xl font-semibold hover:text-black dark:hover:text-white">./projects</NavLink>*/}
            </div>
        </header>
    )
}

export default Header;