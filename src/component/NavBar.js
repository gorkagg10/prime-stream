import React from "react";
import {Link} from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import {SmallSearchBar} from "./SmallSearchBar";

export const NavBar = () => {
    return (
        <div className="topnav">
            <div className="topnav__logo">
                <Link className="logo" to={"/"}>PRIME STREAM</Link>
            </div>
            <div className="topnav__content">
                <div className="links"></div>
                <Link className="links__movies" to={"/peliculas"}>PELÍCULAS</Link>
                <Link className="links__documentaries" to={"/documentales"}>DOCUMENTALES</Link>
            </div>
        </div>
    )
}