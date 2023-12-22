import React from 'react';
import {useLocation} from "react-router-dom";
import {VideoPlayer} from "../component/VideoPlayer";

export const PlayVideo = () => {
    const {state} = useLocation();

    console.log(state);
    return (
        <VideoPlayer className="videoplayer" videoUrl={state}/>

    );
}