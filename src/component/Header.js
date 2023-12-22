import React from "react";
import {Link} from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import {SmallSearchBar} from "./SmallSearchBar";
import {NavBar} from "./NavBar";

export const Header = () => {
    return (
        <div className="header">
            <div className="header__content">
                <NavBar/>
                <div className="content__search">
                    <SmallSearchBar/>
                </div>
            </div>
        </div>
    )
}