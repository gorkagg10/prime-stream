import React, {useContext} from 'react';
import {MoviesContext} from "../context/MoviesContext";
import {LinearProgress} from "@mui/material";
import {Movie} from "../component/Movie";

export const Movies = () => {

    const { movies } = useContext(MoviesContext);

    return (
        <div className="movies">
            <h1>Películas</h1>
            <div className="movies-container">
                {
                    movies.length > 0 ? (
                        movies.map((movie, index) => (
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
                        ))
                    ) : (
                        <LinearProgress/>
                    )
                }
                {}
            </div>
        </div>
    );
}