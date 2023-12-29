import React from "react";
import portfolio from "../data/portfolio.js";
import PortfolioItem from "./portfolioItem.jsx";
import Title from "./title.jsx";

const Portfolio = () => {
    return (
                // <Title id="portfolio">Projects</Title> &&
        <div className="flex flex-col items-center justify-center">
            <Title id="portfolio">Projects</Title>
            <div className="flex flex-col items-center justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {portfolio.map((project) => {
                            return (
                                <PortfolioItem
                                    imgUrl={project.imgUrl}
                                    title={project.title}
                                    stack={project.stack}
                                    url={project.url}
                                    desc={project.desc}
                                />
                            )
                        }
                    )}
                </div>
            </div>
        </div>
    )
}

export default Portfolio;