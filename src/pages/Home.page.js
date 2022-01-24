import React,{useState,useEffect} from "react";
import axios from "axios";

// components
import EntertainmentCardSlider from "../components/Entertainment/EntertainmentCard.component";

import Premier from "../components/Premier/Premier.component";

import Slides from "../components/Premier/Slides.component";

const HomePage = () => {

    // TOP RATED MOVIES
    const [topRatedMovies, setTopRatedMovies] = useState([]);

    useEffect(() => {
        const requestTopRatedMovies = async() => {
            const getTopRatedMovies = await axios.get("/movie/top_rated");
            console.log("getTopRatedMovies", getTopRatedMovies);
            setTopRatedMovies(getTopRatedMovies.data.results);
        };
        requestTopRatedMovies();
    },[]);


    // POPULAR MOVIES
    const [popularMovies, setPopularMovies] = useState([]);

    useEffect(() => {
        const requestPopularMovies = async() =>{
            const getPopularMovies = await axios.get("/movie/popular");
            console.log("getPopularMovies", getPopularMovies)
            setPopularMovies(getPopularMovies.data.results);
        };
        requestPopularMovies();
    },[]);
    // console.log(popularMovies);


    // UPCOMING MOVIES
    const [upcomingMovies, setUpcomingMovies] = useState([]);

    useEffect (() => {
        const requestUpcomingMovies = async() => {
            const getUpcomingMovies = await axios.get("/movie/upcoming");
            console.log("getUpcomingMovies", getUpcomingMovies);
            setUpcomingMovies(getUpcomingMovies.data.results);
        }
        requestUpcomingMovies();
    },[]);


    // TV SHOWS
    const [nowPlayingMovies, setNowPlayingMovies] = useState([]);

    useEffect (() =>{
        const requestNowPlayingMovies = async() =>{
            const getNowPlayingMovies = await axios.get("/movie/now_playing");
            console.log("getNowPlayingMovies", getNowPlayingMovies);
            setNowPlayingMovies(getNowPlayingMovies.data.results);
        }
        requestNowPlayingMovies();
    },[])

    // DISPLAY OF HOMEPAGE
    return(
        <>
            <div className="flex flex-col gap-9 ">

                {/* LATEST MOVIES */}
                <div className="flex flex-col gap-9 ">

                    <div className="container mx-auto px-0 my-12">
                        <h1 className="text-2xl font-bold text-gray my-2 mx-2">
                            Latest Movies
                        </h1>

                        <p className="mx-2">
                            Presenting some Latest movies to excite your movie bluff personality!
                        </p>

                        <div className="container mx-0 my-4">
                            <Slides PremierImages={nowPlayingMovies}/>
                        </div>
                    </div>
                </div>


                {/* BOOK MY SHOW STREAM IMAGE */}
                <div>
                    <img
                        src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/lead-in-v3-collection-202102040828.png"
                        alt="book_my_show_stream"
                        className="w-full h-full px-16"
                    />
                </div>

                {/* ENTERTAINMENT CARD SLIDER */}
                <div className="container mx-auto px-0 my-12">
                    <h1 className="text-2xl font-bold text-gray my-3">
                    The Best of Entertainment
                    </h1>
                    <EntertainmentCardSlider/>

                </div>

                {/* PREMIER MOVIES */}
                <div className="bg-blue-bms py-8 px-10">
                    <div>
                        <img
                            src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
                            alt="Premier-Rupay"
                            className="w-full h-full px-4"
                        />
                    </div>

                    <div className="container mx-0 my-0">
                        <Premier PremierImages={popularMovies}/>
                    </div>
                    
                </div>


                {/* UPCOMING MOVIES */}
                <div className="flex flex-col gap-9 ">

                    <div className="container mx-auto px-0 my-12">
                        <h1 className="text-2xl font-bold text-gray my-2 mx-2">
                        Upcoming Movies
                        </h1>

                        <p className="mx-2">
                            Presenting you some upcoming movies so that you can plan ahead!
                        </p>

                        <div className="container mx-0 my-4">
                            <Slides PremierImages={upcomingMovies}/>
                        </div>
                    </div>
                </div>

                {/* TOP RATED MOVIES */}
                <div className="container mx-auto px-0 my-12">
                    <h1 className="text-2xl font-bold text-gray my-2 mx-2">
                        Top Rated Movies
                    </h1>

                    <p className="mx-2">
                        Some top rated movies to watch if you're feeling bored!
                    </p>
                    <div className="container mx-0 my-4">
                        <Slides PremierImages={topRatedMovies}/>
                    </div>

                </div>
                

            </div>
        </>
    );
};



export default HomePage;