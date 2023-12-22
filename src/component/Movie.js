import React, {useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import StarIcon from '@mui/icons-material/Star';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import {VideoPlayer} from "./VideoPlayer";
export const Movie = ({ id, titulo, imagen, puntuacion, url, parentUrl }) => {
    const navigate = useNavigate();
    const playVideo = () => {
        console.log(url)
        navigate(`${id}/play-video`, { state: url })
    }

    return (
        <div className="movie">
            <div className="movie__img">
                <Link to={`/${parentUrl}/${id}`}>
                 <img className="image" src={imagen} alt="Movie poster"/>
                </Link>
            </div>
            <div className="movie__rating">
                <StarIcon className="star"/>
                <p className="rating">{puntuacion}</p>
            </div>
            <div className="movie__title">
                <Link to={`/${parentUrl}/${id}`}>
                    <p className="title">{titulo}</p>
                </Link>
            </div>
            <div className="movie__play">
                <button className="play__button" onClick={playVideo}>
                    <PlayArrowIcon className="button__icon"/>
                    Ver
                </button>
            </div>
        </div>
    )
}