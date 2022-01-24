import React from "react";

import { BiChevronRight, BiSearch, BiShareAlt, BiDownArrow, BiMenu } from "react-icons/bi";
// import { BiSearch, BiDownArrow, BiMenu } from "react-icons/bi";

const NavSm = () => {
    return (
        <>
            <div className="text-gray-800 bg-white flex flex-row">
                <div>
                    <h3 className="">It All Starts Here!</h3>
                </div>
                <div>
                    <div className="w-8 h-8">
                        <BiShareAlt className="w-full h-full"/>
                    </div>
                </div>
            </div>
        </>
    );
};
const NavMd = () => {
    return(
        <>
            <div className="w-full flex gap-3 items-center bg-white px-3 py-2 rounded-md">
                <BiSearch />
                <input
                    type="search"
                    className="w-full"
                    placeholder="Search for Movies, Events, Plays, Sports and Activities"
                />
            </div>
        </>
    );
};

const NavLg = () => {
    return(
        <>
            <div className=" w-full flex bg-blue-bms mx-0 my-0 px-0 py-0">
                <img
                    src="https://m.economictimes.com/thumb/msid-78623207,width-1200,height-900,resizemode-4,imgsize-18418/bookmyshow.jpg"
                    alt="book-my-show-logo"
                    className="w-32 h-16 mx-2 my-2"
                />

                <div className="flex w-full mx-3">
                    <BiSearch className="my-7 w-12 h-6 text-white"/>
                    <input
                    type="search"
                    className="w-full h-10 rounded-xl my-5 px-2"
                    placeholder="Search for Movies, Events, Plays, Sports and Activities"
                    />
                </div>
                

                <div className="text-white flex mx-1 my-7 px-2">
                    <p className="px-2">Mumbai</p>
                    <BiDownArrow className="my-1"/>
                </div>

                <div>
                    <button
                        className="btn btn-default bg-pink rounded-md my-7 mx-4 px-2 text-white text-xs w-16 h-7"
                    >
                    Sign In
                    </button>
                </div>

                <BiMenu className="text-white w-10 h-8 my-6 mx-3"/>
            </div>
        </>
    );
};

const MovieNavBar = () =>{
    return(
        <>
            <nav className="">
                
                <div className="md:hidden">
                    {/*Mobile screen*/}
                    <NavSm />
                </div>
                
                <div className="hidden md-block lg:hidden">
                    {/*Tablet Screen*/}
                    <NavMd/>
                </div>

                <div className="bg-gray-800 hidden lg:flex">
                    {/*Desktop Screen*/}
                    <NavLg/>
                </div>
            </nav>
        </>
    );
};

export default MovieNavBar;





