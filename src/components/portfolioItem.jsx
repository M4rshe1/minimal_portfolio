import React from "react";


const PortfolioItem = ({imgUrl, title, stack, url}) => {
    return (
        <a 
            href={url} 
            className="border-2 border-gray-900 rounded-md dark:border-white overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out"
            target="_blank"
            rel="noreferrer"
        >
            <img
                src={imgUrl}
                alt="Image"
                className="w-full h-36 cursor-pointer object-cover object-center"
            />
            <div className="w-full p-4">
                <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">{title}</h3>
                <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xm md:text-sm">
                    {stack.map(item => (
                        <span className="inline-block px-2 py-1 font-semibold border-2 dark:border-white border-gray-900 rounded-md">
                            {item}
                        </span>
                    ))}
                </p>
            </div>
        </a>
    )
}

export default PortfolioItem