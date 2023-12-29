import React from "react"

const Intro = () => {
    return (
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
            <img
                src="/assets/avatar.png"
                alt="me"
                className="h-72 w-1/1 rounded-full shadow-md mb-3"
            />
            <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">Colin</h1>
            <p className="text-base md:text-xl mb-3 font-medium">IT Person & Hobby Programmer</p>
            <p className=" text-sm max-w-xl mb-6 font-bold">
                Hello! I'm Colin, a
                {" "}
                {
                    new Date().getFullYear() - 2007
                }
                {" "}
                year old IT student from Switzerland. I'm currently making an apprenticeship as an "Betriebsinformatiker EFZ" at Georg Fischer AG in Schaffhausen.
                In my free time I like to program whats on my mind, or talk with friends on Discord. <br />
                
            </p>
        </div>
    )
}

export default Intro