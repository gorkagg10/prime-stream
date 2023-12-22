import React from "react";
import ReactPlayer from "react-player";

export const VideoPlayer = ({videoUrl}) => {
    return (
        <div className="player--container">
            <ReactPlayer
                url={videoUrl}
                controls
            />
        </div>
    )
}