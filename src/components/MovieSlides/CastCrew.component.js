import React from "react";

import Slider from "react-slick";

import Poster2 from "../Poster/Poster2.component";

const CastCrew = () => {
    const settings = {
        infinity: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        autoplay: false,
        InitialSlide:0
    }

    const CastCrewImages = [
        {
            src:"https://in.bmscdn.com/iedb/artist/images/website/poster/large/tom-holland-33741-15-12-2021-05-05-50.jpg",
            alt:"cast-crew-images",
            title:"Tom Holland",
            subtitle:"as Peter-Parker/Spider Man",
        },
        {
            src:"https://in.bmscdn.com/iedb/artist/images/website/poster/large/zendaya-iein098146-03-07-2017-14-20-19.jpg",
            alt:"cast-crew-images",
            title:"Zendaya",
            subtitle:"MJ",
        },
        {
            src:"https://in.bmscdn.com/iedb/artist/images/website/poster/large/benedict-cumberbatch-6466-25-04-2018-02-01-01.jpg",
            alt:"cast-crew-images",
            title:"Benedict Cumberbatch",
            subtitle:"Doctor Strange",
        },
        {
            src:"https://in.bmscdn.com/iedb/artist/images/website/poster/large/jon-favreau-1055-24-03-2017-17-58-59.jpg",
            alt:"cast-crew-images",
            title:"Jon Favreau",
            subtitle:"as Happy Hogan",
        },
        {
            src:"https://in.bmscdn.com/iedb/artist/images/website/poster/large/jacob-batalon-1084051-03-07-2017-14-36-39.jpg",
            alt:"cast-crew-images",
            title:"Jacob batalon",
            subtitle:"as Ned Leeds"
        },
        {
            src:"https://in.bmscdn.com/iedb/artist/images/website/poster/large/angourie-rice-38311-24-03-2017-16-05-52.jpg",
            alt:"cast-crew-images",
            title:"Angourie rice",
            subtitle:"as Betty Brant"
        },
        {
            src:"https://in.bmscdn.com/iedb/artist/images/website/poster/large/marisa-tomei-23232-24-03-2017-17-29-33.jpg",
            alt:"cast-crew-images",
            title:"Marisa Tomei",
            subtitle:"as May Parker"
        },
        {
            src:"https://in.bmscdn.com/iedb/artist/images/website/poster/large/jamie-foxx-920-24-03-2017-13-52-00.jpg",
            alt:"cast-crew-images",
            title:"jamie-foxx",
            subtitle:"as Electro"
        },
        {
            src:"https://in.bmscdn.com/iedb/artist/images/website/poster/large/thomas-haden-church-2360-24-03-2017-12-39-19.jpg",
            alt:"cast-crew-images",
            title:"Thomas Haden Church",
            subtitle:"Actor"
        },
            
    ];
    

    

    return(
        <>
            <Slider {...settings}>
                {CastCrewImages.map((image) => (
                    <Poster2 {...image}/>
                ))} 
            </Slider>
        </>
        
    );
};

export default CastCrew;







