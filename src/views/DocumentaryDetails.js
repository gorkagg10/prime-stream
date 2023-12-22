import React, {useContext} from 'react';
import { useParams} from "react-router-dom";
import {MoviesContext} from "../context/MoviesContext";
import {MovieInfo} from "../component/MovieInfo";

export const DocumentaryDetails = () => {
    const { documentaryId } = useParams();
    const { documentaries } = useContext(MoviesContext);
    const documentary = documentaries.find(documentary => documentary.id === documentaryId)

    if (!documentary) {
        return <h2>Película  no encontrada</h2>
    }

    return (
        <MovieInfo movie={documentary}/>
    );
}