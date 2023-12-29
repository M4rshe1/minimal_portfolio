import React from "react";

function Title({children}) {
    return (
        <div>
            <h1 className="text-4xl font-bold underline underline-offset-8 decoration-4 text-gray-900 dark:text-white mt-8 mb-16">
                {children}
            </h1>
        </div>
    )
}

export default Title;