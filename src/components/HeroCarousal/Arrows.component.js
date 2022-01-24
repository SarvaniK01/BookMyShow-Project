import React from "react";


export const NextArrow = (props) => {
    return (
        <>
            <div
                className = {props.className}
                style={{...props.style, backgroundColor:"transparent", color:"gray"}}
                onClick={props.onClick}
            />
        </>
    );
};


export const PrevArrow = (props) => {
    return (
        <>
            <div
                className={props.className}
                style={{...props.style, backgroundColor:"transparent"
                }}
                onClick={props.onClick}
            />
        </>
    );
};







