import React from "react";
import timeline from "../data/timeline.js";
import TimelineItem from "./timelineItem.jsx";
import Title from "./title.jsx";

const Timeline = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center my-20 ">
            <div className="w-full md:w-7/12">
                <Title id="timeline">Timeline</Title>
                {timeline.map((item) => (
                    <TimelineItem
                        year={item.year}
                        title={item.title}
                        duration={item.duration}
                        details={item.details}
                    />
                ))}
            </div>
        </div>
    )
}

export default Timeline