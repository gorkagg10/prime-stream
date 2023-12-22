import React from 'react';
import {SearchContext} from "../context/SearchContext";
import {MainSearchBar} from "../component/MainSearchBar";
import {Categories} from "../component/Categories";

function Landing() {
    const [selectedButton, setSelectedButton] = React.useState(null);

    return (
        <div className="landing">
            <h1>Busca y ve películas o documentales</h1>
            <SearchContext.Provider value={{ selectedButton, setSelectedButton }}>
                <MainSearchBar/>
                <Categories/>
            </SearchContext.Provider>
        </div>
    )
}

export default Landing;