import React from "react";
import {Button} from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import {useNavigate} from "react-router-dom";

export const MovieInfo = ({movie}) => {
    const navigate = useNavigate();
    const playVideo = () => {
        navigate(`play-video`, { state: movie.url })
    }

    return (
        <div className="details">
            <div className="details__img">
                <img src={movie.imagen} alt="logo"/>
            </div>
            <div className="details__info">
                <h2>{movie.titulo}</h2>
                <p className="info__attribute">
                    <span className="info__attribute--highlight">Año: </span>
                    {movie.year}
                </p>
                <p className="info__attribute">
                    <span className="info__attribute--highlight">Género: </span>
                    {movie.genero}
                </p>
                <p className="info__attribute">
                    <span className="info__attribute--highlight">Dirección: </span>
                    {movie.direccion}
                </p>
                <p className="info__attribute">
                    <span className="info__attribute--highlight">Guión: </span>
                    {movie.guion}
                </p>
                <p className="info__attribute">
                    <span className="info__attribute--highlight">Duración: </span>
                    {movie.duracion}
                </p>
                <p className="info__attribute">
                    <span className="info__attribute--highlight">Puntuación: </span>
                    {movie.puntuacion} / 10
                </p>
                <p className="info__attribute">{movie.sipnosis}</p>
                <button className="play__button" onClick={playVideo}>
                    <PlayArrowIcon className="button__icon"/>
                    Ver
                </button>
            </div>
        </div>
    )
}