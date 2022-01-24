import React from "react";

import Slider from "react-slick";

import Poster2 from "../Poster/Poster2.component";

const Crew = () => {
    const settings = {
        infinity: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        autoplay: false,
        InitialSlide:0
    }

    const CrewImages = [
        {
            src:"https://in.bmscdn.com/iedb/artist/images/website/poster/large/jon-watts-1057903-24-03-2017-17-55-32.jpg",
            alt:"cast-crew-images",
            title:"Jon Watts",
            subtitle:"Director",
        },
        {
            src:"https://in.bmscdn.com/iedb/artist/images/website/poster/large/kevin-feige-1092082-18-04-2018-14-44-54.jpg",
            alt:"cast-crew-images",
            title:"Kevin Feige",
            subtitle:"Producer",
        },
        {
            src:"https://in.bmscdn.com/iedb/artist/images/website/poster/large/amy-pascal-1084057-08-11-2017-12-48-54.jpg",
            alt:"cast-crew-images",
            title:"Amy Pascal",
            subtitle:"Producer",
        },
        {
            src:"https://in.bmscdn.com/iedb/artist/images/website/poster/large/chris-mckenna-9932-24-03-2017-15-21-09.jpg",
            alt:"cast-crew-images",
            title:"Chris McKenna",
            subtitle:"Writer",
        },
        {
            src:"https://in.bmscdn.com/iedb/artist/images/website/poster/large/erik-sommers-1069623-18-06-2017-01-09-18.jpg",
            alt:"cast-crew-images",
            title:"Eric Sommers",
            subtitle:"Writer"
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
                {CrewImages.map((image) => (
                    <Poster2 {...image}/>
                ))} 
            </Slider>
        </>
        
    );
};

export default Crew;







