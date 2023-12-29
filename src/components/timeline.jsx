import React from "react";
import timeline from "../data/timeline.js";
import TimelineItem from "./timelineItem.jsx";
import Subtitle from "./subtitle.jsx";

const Timeline = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center my-20 ">
            <div className="w-full md:w-7/12">
                <Subtitle id="timeline">Timeline</Subtitle>
                {timeline.map((item, index) => (
                    <TimelineItem
                        key={index}
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