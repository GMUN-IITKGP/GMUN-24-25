import React from "react";
import "./App.css";


function Headingall(props) {
    return(
        <>
            <h1 className="heading-all">
                {props.headingname}
            </h1>
        </>
    )
}

export default Headingall ;