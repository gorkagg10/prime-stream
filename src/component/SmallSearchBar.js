import React, {useState} from "react";
import SearchIcon from '@mui/icons-material/Search';
import {useNavigate} from "react-router-dom";

export const SmallSearchBar = () => {
    const [palabraClave, setPalabraClave] = useState('');
    const navigate = useNavigate();
    const handleInputChange = (event) => {
        setPalabraClave(event.target.value);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    }
    const handleSearch= () => {
        navigate(`/browse/${palabraClave}`)
    }

    return (
        <div className="smallsearch">
            <form className="smallsearch__form">
                <div className="smallsearch__bar">
                    <SearchIcon className="smallsearch__icon" fontSize="large"/>
                    <input className="smallsearch__input" type="text" onChange={handleInputChange} onKeyDown={handleKeyPress} placeholder="Ingresa una palabra clave..."/>
                </div>
            </form>
        </div>
    )
}