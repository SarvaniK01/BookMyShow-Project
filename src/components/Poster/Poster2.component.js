import React from "react";

const Poster2 = (props) => {
    return(
        <>
            <div className="px-3 my-5">
                <div className="w-45 h-25">
                    <img src={props.src} alt="cast-images" className="w-25 h-25 rounded-full"/>
                </div>

                <h3
                 className={`text-lg font-bold ${
                    props.isDark ? "text-white" : "text-gray-800"
                 }`}
                >
                    {props.title}
                </h3>

                <p 
                 className={`text-sm font-bold ${
                    props.isDark ? "text-white" : "text-gray-700"
                 }`}
                >
                    {props.subtitle}
                </p>

            </div>
        </>
    );
};

export default Poster2;

