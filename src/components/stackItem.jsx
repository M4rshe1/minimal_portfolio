import React from "react";
import {Link} from "react-router-dom";

const StackItem = ({text, color}) => {
    return (
        <Link
            to={`/stack/${text}`}
            className="inline-block px-2 py-1 font-semibold border-2 rounded-md"
            style={
            {"borderColor": color}
        }
        >
            {text}
        </Link>
    )
}

export default StackItem;