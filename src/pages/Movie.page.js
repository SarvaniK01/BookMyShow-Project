import React,{useState, useEffect} from "react";

import axios from "axios";

import MovieSlides from "../components/MovieSlides/MovieSlides.component";
import Cast from "../components/MovieSlides/CastCrew.component";
import Crew from "../components/MovieSlides/Crew.component";

// Icons
import { BsHeartFill, BsDot } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";



const launchRazorPay = () => {
    let options = {
        key:"rzp_test_cuCe7qmbSGWBmL",
        amount : 50000,
        currency: "INR",
        name: "Book My Show Clone",
        description : "Movie Ticket Purchase",
        image:"https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png",
        handler: () => {
            alert("Payment was Succesfull!")
        },
        theme: {color: "#c4242d"} 
    };

    let rzp = new window.Razorpay(options);
    rzp.open();
};

const MoviePage = () => {

    const [movieCast, setMovieCast] = useState([]);

    useEffect(() => {
        const requestMovieCast = async() => {
            const getMovieCast = await axios.get("/movie/:{movie_id}/credits");
            console.log("getMovie", getMovieCast);
            setMovieCast(getMovieCast.data.results);
        };
        requestMovieCast();
    },[]);

    const [movieCrew, setMovieCrew] = useState([]);

    useEffect(() => {
        const requestMovieCrew = async() => {
            const getMovieCrew = await axios.get("/movie/:{movie_id}/credits");
            console.log("getMovieCrew", getMovieCrew);
            setMovieCrew(getMovieCrew.data.results);
        };
        requestMovieCrew();
    },[]);

    return (
        <>
            <div className="w-full h-full .container">
                <div className=" .headings absolute top-40 left-20 z-20 flex">
                    <div className="">
                        <img 
                        src="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/spider-man-no-way-home-et00310790-07-12-2021-07-25-42.jpg"
                        className="movie-poster rounded-xl"
                        alt="movie-i"
                        />
                    </div>
                    <div className="mx-1 px-10">
                        <div className="">
                            <h1 className="my-2 text-4xl font-bold text-white">Spider-man No way Home</h1>
                        </div>

                        <div className="my-5 flex text-white">
                            <BsHeartFill className="text-red-ticket text-3xl my-2"/>
                            <h1 className="mx-2 my-2 text-xl font-bold">91%</h1>
                            <p className="mx-2 my-2 text-lg">410.3K ratings</p>
                            <IoIosArrowForward className="text-xl my-4"/>
                        </div>

                        <div className="my-5 bg-movie-grey flex justify-between rounded-md">
                            <div className="mx-2 my-3">
                                <h1 className="text-white">Add your rating & review</h1>
                                <h1 className="text-white text-movie-text">Your ratings matter</h1>
                            </div>
                            <button className="bg-white rounded-md mx-4 my-3 px-2 text-movie-grey font-bold">Rate Now</button>
                        </div>

                        
                        <div className="bg-movie-white rounded-md my-2">
                            <h1 className="px-2 py-0.5 .underline">2D, 4DX, 3D, 4DX 3D, IMAX 2D</h1>
                        </div>
                        <div className="bg-movie-white rounded-md my-2">
                            <h1 className="px-2 py-0.5 .underline">English, Hindi, Kannada, Telugu</h1>
                        </div>

                         <div className="flex my-3 text-white text-xl">
                            <h1>2h 28m</h1>
                            <BsDot className="my-1 text-xl"/>
                            <h1>Action, Adventure, Sci-fi</h1>
                            <BsDot className="my-1 text-xl"/>
                            <h1>UA</h1>
                            <BsDot className="my-1 text-xl"/>
                            <h1>16 Dec, 2021</h1>
                        </div>

                        <div className="">
                            <button onClick={launchRazorPay} className="my-3 bg-red-ticket hover:red-ticket text-white font-bold py-2 px-4 rounded-lg">
                            <h1>Book Tickets</h1>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="movie-image">
                    <img
                    className="w-full h-full movie-bg"
                    src = 'https://images.thedirect.com/media/photos/SpiderManPoster.jpg'
                    alt = "movie-bg"
                    />
                </div>
            </div>
            
            {/* CAST & CREW */}
            <div>
                <hr></hr>
            </div>
            <div>
                
                <h1 className="container mx-20 my-4 font-bold text-2xl">Cast</h1>
                <div className="mx-auto px-3 container">
                    <Cast PremierImages={movieCast}/>
                </div>
            </div>
            <div>
                <hr></hr>
            </div>
            <div>
                <h1 className="container mx-20 my-4 font-bold text-2xl">Crew</h1>
                <div className="mx-auto px-3 container">
                    <Crew PremierImages={movieCrew}/>
                </div>
            </div>
            
        </>
    );
};

export default MoviePage;



