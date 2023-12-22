import React, {useContext} from "react";
import {Link} from "react-router-dom"
import {SearchContext} from "../context/SearchContext";
export const Categories = () => {
    const { selectedButton, setSelectedButton } = useContext(SearchContext);

    const handleCategoryButtonClick = (buttonName) => {
        setSelectedButton(buttonName)
    }

    return (
        <div className="categories">
            <button
                onClick={() => handleCategoryButtonClick('movie')}
                className={selectedButton === 'movie' ? 'categories__button--active' : 'categories__button'}
                >
                PELÍCULAS
            </button>
            <button
                onClick={() => handleCategoryButtonClick('documentary')}
                className={selectedButton === 'documentary' ? 'categories__button--active' : 'categories__button'}
            >
                DOCUMENTALES
            </button>
        </div>
    )
}