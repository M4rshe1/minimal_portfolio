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
            <p className=" text-sm max-w-xl mb-6 font-bold">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Consectetur cumque dolores esse fugiat illum qui quod sapiente sit? Deserunt enim impedit inventore
                placeat quos sed unde vel voluptas. Iste, voluptatum!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam error nobis perferendis
                sapiente temporibus voluptatem! Aliquid eius enim minus natus nesciunt placeat praesentium quas
                repellendus, repudiandae suscipit tempore voluptatum.</p>
        </div>
    )
}

export default Intro