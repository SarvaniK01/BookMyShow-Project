import React from "react";


// NavBar
import NavBar from "../components/Navbar/navbar.component";

// HeroCarousal
import HeroCarousal from "../components/HeroCarousal/HeroCarousal.component";

const defaultLayout = (props) => {
    return(
        <div>
            <NavBar />
            < HeroCarousal/>
            {props.children}
        </div>
    );
};

export default defaultLayout;