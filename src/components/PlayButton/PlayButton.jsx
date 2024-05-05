import { mediaConstants } from "../../config/mediaConstants";
import '../PlayButton/PlayButton.css';

import React from 'react'

const PlayButton = ({isPlaying,setIsPlaying}) => {
    return  (
    <button onClick={() => setIsPlaying(!isPlaying)} className="play-btn">
        {isPlaying ? (
            <img src={mediaConstants.playOnIcon} />
        ):(
            <img src={mediaConstants.playOffIcon} />
        )}
    </button>
    );
};

export default PlayButton;