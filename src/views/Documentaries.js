import React, {useContext} from 'react';
import {MoviesContext} from "../context/MoviesContext";
import {LinearProgress} from "@mui/material";
import {Movie} from "../component/Movie";

export const Documentaries = () => {

    const { documentaries } = useContext(MoviesContext);

    return (
        <div className="movies">
            <h1>Documentales</h1>
            <div className="movies-container">
                {
                    documentaries.length > 0 ? (
                        documentaries.map((movie, index) => (
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
                                parentUrl={'documentales'}
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