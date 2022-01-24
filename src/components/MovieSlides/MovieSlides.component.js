import React from "react";

import Slider from "react-slick";

//poster
import Poster from "../Poster/Poster.component";

const MovieSlides = (props) => {
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
                
            </Slider>
        </>
    );
}

export default MovieSlides;