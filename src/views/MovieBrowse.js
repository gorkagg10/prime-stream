import React, {useContext, useEffect, useState} from 'react';
import {MoviesContext} from "../context/MoviesContext";
import {LinearProgress} from "@mui/material";
import {Movie} from "../component/Movie";
import {useParams} from "react-router-dom";

export const MovieBrowse = () => {
    const { movies} = useContext(MoviesContext);
    const [filteredMovies, setFilteredMovies] = useState([]);

    const { keyWord } = useParams();

    useEffect (() => {
        if (movies.length > 0) {
            const filteredMovie = movies.filter((movie) => movie.titulo.toLowerCase().includes(keyWord.toLowerCase()) );
            setFilteredMovies(filteredMovie)
        }
    }, [movies]);

    return (
        <div className="movies">
            <h1>Busqueda: {keyWord}</h1>
            <h2>Películas</h2>
            <div className="movies-container">
                {
                    filteredMovies.length > 0 ? (
                            filteredMovies.map((movie, index) => (
                                    <Movie
                                        key={index}
                                        id={movie.id}
                                        year={movie.year}
                                        titulo={movie.titulo}
                                        imagen={movie.imagen}
                                        genero={movie.genero}
                                        direccion={movie.direccion}
                                        guion={movie.guion}
                                        puntuacion={movie.puntuacion}
                                        url={movie.url}
                                        parentUrl={'peliculas'}
                                    />

                                )
                            )
                        ) :
                        <h3>No se han encontrado películas con esta palabra clave</h3>

                }
            </div>
        </div>
    );
}