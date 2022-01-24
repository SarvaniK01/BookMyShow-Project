import React from "react";
import Slider from "react-slick";

//poster
import Poster from "../Poster/Poster.component";


const Premier = (props) => {
    const settings = {
        infinity: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        autoplay: false,
        InitialSlide:0
    }

    // const PremierImages = [
    //     {
    //         src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00122449-xygxarrqwa-portrait.jpg",
    //         alt:"Movie-image",
    //         title: "Malignant",
    //         subtitle:"English",
    //     },
    //     {
    //         src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00122526-laqcblhanx-portrait.jpg",
    //         alt:"Movie-image",
    //         title: "Dune",
    //         subtitle:"English"
    //     },
    //     {
    //         src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00122451-ebbbdcqkdm-portrait.jpg",
    //         alt:"Movie-image",
    //         title: "Nobody",
    //         subtitle:"English"
    //     },
    //     {
    //         src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00301282-dnzbnayacy-portrait.jpg",
    //         alt:"Movie-image",
    //         title: "Kabullywood",
    //         subtitle:"Farsi"
    //     },
    //     {
    //         src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00311795-tjphjtaums-portrait.jpg",
    //         alt:"Movie-image",
    //         title: "Reminiscence",
    //         subtitle:"English"
    //     },
    //     {
    //         src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00309402-tcywztuxdf-portrait.jpg",
    //         alt:"Movie-image",
    //         title: "The Suicide Squad",
    //         subtitle:"English"
    //     },
    //     {
    //         src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00122511-azgcwzunrh-portrait.jpg",
    //         alt:"Movie-image",
    //         title: "Godzilla vs. Kong",
    //         subtitle:"English"
    //     },
    //     {
    //         src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00302306-wsyqpgjqdc-portrait.jpg",
    //         alt:"Movie-image",
    //         title: "Proximity",
    //         subtitle:"English"
    //     },
    //     {
    //         src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00308446-mvtasqrzpb-portrait.jpg",
    //         alt:"Movie-image",
    //         title: "Mortal Kombat",
    //         subtitle:"English"
    //     },
    //     {
    //         src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00137312-qszmhzktyk-portrait.jpg",
    //         alt:"Movie-image",
    //         title: "The Secrets We Keep",
    //         subtitle:"English"
    //     }
    // ]

    return (
        <>
            <div className="flex flex-col items-start gap-1 py-2 px-4">
                <h3 className="text-white font-bold text-xl">Premieres</h3>
                <p className="text-white text-sm">Brand New releases every Friday</p>
            </div>
            <Slider {...settings}>
                {props.PremierImages.map((image) => (
                    <Poster {...image} isDark/>
                ))} 
            </Slider>
        </>
    );
};

export default Premier;






