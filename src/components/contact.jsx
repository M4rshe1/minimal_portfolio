import React from "react";
import Subtitle from "./subtitle.jsx";

const Contact = () => {
    return (
        <div className="flex flex-col mb-10 mx-auto">
            <div className="flex justify-center items-center">
                <form
                    action="https://getform.io/f/d836c56b-beb4-4b87-a151-f12e562e6b15"
                    method="POST"
                    className="fex flex-col w-full md:w-7/12"
                >
                    <Subtitle id="contact">Contact</Subtitle>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="p-2 bg-transparent border-2 rounded-md focus:outline-none w-full"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="my-4 p-2 bg-transparent border-2 rounded-md focus:outline-none w-full"
                    />
                    <textarea
                        name="message"
                        placeholder="Message"
                        rows="10"
                        className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none w-full"
                    />
                    <button
                        type="submit"
                        className="text-center inline-block px-8 py-3 w-max text-base font-medium text-white rounded-md 
                        dark:bg-orange-300 bg-violet-300 drop-shadow-md dark:hover:bg-violet-400 hover:bg-orange-300 transition duration-300 ease-in-out"
                    >
                        Contact Me
                    </button>
                    {/*<input type="hidden" name="_gotcha" style="display:none !important"/>*/}
                </form>
            </div>
        </div>
    )
}

export default Contact