import React from "react";


// NavBar
import MovieNavBar from "../components/Navbar/movie.component";
// import NavBar from "../components/Navbar/navbar.component";

import Slides from "../components/Premier/Slides.component";

const MovieLayout = (props) => {
    return(
        <div>
            <MovieNavBar/>
            {props.children}
        </div>
    );
};

export default MovieLayout;