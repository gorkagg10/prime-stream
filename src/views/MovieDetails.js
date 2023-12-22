import React, {useContext} from 'react';
import { useParams} from "react-router-dom";
import {MoviesContext} from "../context/MoviesContext";
import {MovieInfo} from "../component/MovieInfo";

export const MovieDetails = () => {
    const { movieId } = useParams();
    const { movies } = useContext(MoviesContext);
    const movie = movies.find(movie => movie.id === movieId)

    if (!movie) {
        return <h2>Película  no encontrada</h2>
    }

    return (
        <MovieInfo movie={movie}/>
    );
}