import React, {useContext, useState} from 'react';
import {SearchContext} from "../context/SearchContext";
import {Link, useNavigate} from "react-router-dom";

export const MainSearchBar = () => {
    const [palabraClave, setPalabraClave] = useState('');
    const { selectedButton }  = useContext(SearchContext);
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        setPalabraClave(event.target.value);
    };

    const handleSearch = () => {
        if (selectedButton === 'movie') {
           navigate(`/browse/peliculas/${palabraClave}`)
        } else if (selectedButton === 'documentary') {
            navigate(`/browse/documentales/${palabraClave}`)
        }
    }

    return (
        <div className="search">
            <input className="search__bar" type="text" onChange={handleInputChange} placeholder="Ingresa una palabra clave..."></input>
            <button className="search__button" onClick={handleSearch}>Buscar</button>
        </div>
    )
}
