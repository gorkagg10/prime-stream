import React, {useContext, useEffect, useState} from 'react';
import {MoviesContext} from "../context/MoviesContext";
import {LinearProgress} from "@mui/material";
import {Movie} from "../component/Movie";
import {useParams} from "react-router-dom";

export const DocumentaryBrowse = () => {
    const { documentaries } = useContext(MoviesContext);
    const [filteredDocumentaries, setFilteredDocumentaries] = useState([]);

    const { keyWord } = useParams();

    useEffect (() => {
        if (documentaries.length > 0) {
            const filteredDocumentaries = documentaries.filter((movie) => movie.titulo.toLowerCase().includes(keyWord.toLowerCase()) );
            setFilteredDocumentaries(filteredDocumentaries)
        }
    }, [documentaries]);

    return (
        <div className="movies">
            <h1>Busqueda: {keyWord}</h1>
            <h2>Documentales</h2>
            <div className="movies-container">
                {
                    filteredDocumentaries.length > 0 ? (
                            filteredDocumentaries.map((movie, index) => (
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
                        <h3 className="busqueda--fallida">No se han encontrado documentales con esta palabra clave</h3>
                }
                {}
            </div>
        </div>
    );
}