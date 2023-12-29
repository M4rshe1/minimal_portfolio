import React from "react";

// Components
import Intro from "../components/intro.jsx";
import Projects from "../components/projects.jsx";
import Timeline from "../components/timeline.jsx";
import Contact from "../components/contact.jsx";


function Home() {
    return (
        <>
            <Intro/>
            <Projects/>
            <Timeline/>
            <Contact/>
        </>
    );
}

export default Home;