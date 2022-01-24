import React, {useState, useEffect} from "react";
import HeroSlider from "react-slick";
import axios from "axios";

// components
import { PrevArrow, NextArrow } from "./Arrows.component";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const HeroCarousal = () => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        const requestNowPlayingMovies = async() => {
            const getImages = await axios.get("/movie/now_playing");
            console.log("getImages:",getImages);
            setImages(getImages.data.results);
        };
        requestNowPlayingMovies();
    },[]);

    const settings = {
        arrows:true,
        centerMode: true,
        centerPadding: "160px",
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow:<NextArrow/>,
        prevArrow:<PrevArrow/>
    };

    return (
        <>
            <HeroSlider {...settings}>
                {images.map((image) => (
                    <div className="w-20 h-96 px-2 py-3">
                        <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} alt="test-img" className="rounded-md w-full h-full" />
                    </div>
                ))}
            </HeroSlider>
        </>
    );
};

export default HeroCarousal;





