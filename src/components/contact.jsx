import React, {useRef} from "react";
import Subtitle from "./subtitle.jsx";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const serviceID = "service_wogrnim";
    const publickKey = "To0mvycqcZAMWX5t9";
    const themplateID =  "template_9nu2bjt";

    function handleFormSubmit(event) {
        event.preventDefault();
        emailjs.sendForm(serviceID, themplateID, form.current, publickKey
            .then(function () {
                console.log('SUCCESS!');
                alert("Your message has been sent!")
                window.location.reload();
            }, function (error) {
                console.log('FAILED...', error);
            }));
    }

    return (
        <div className="flex flex-col mb-10 mx-auto">
            <div className="flex justify-center items-center">
                <form
                    ref={form}
                    action="/"
                    method="POST"
                    className="fex flex-col w-full md:w-7/12"
                    onSubmit={handleFormSubmit}
                >
                    <Subtitle id="contact">Contact</Subtitle>
                    <input
                        type="text"
                        name="user_name"
                        placeholder="Name"
                        className="p-2 bg-transparent border-2 rounded-md focus:outline-none w-full"
                    />
                    <input
                        type="email"
                        name="user_email"
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
                </form>
            </div>
        </div>
    )
}

export default Contact