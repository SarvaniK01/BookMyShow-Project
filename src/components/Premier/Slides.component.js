import React from "react";
import Slider from "react-slick";

//poster
import Poster from "../Poster/Poster.component";


const Slides = (props) => {
    const settings = {
        infinity: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        autoplay: false,
        InitialSlide:0
    }

    return (
        <>
            <Slider {...settings}>
                {props.PremierImages.map((image) => (
                    <Poster {...image}/>
                ))} 
            </Slider>
        </>
    );
};

export default Slides;






