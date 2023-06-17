"use client"

import React, { useState, useRef } from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';

import './Video.css';

const Video = () => {
    const [playVideo, setPlayVideo] = useState(false);
    const vidRef = useRef();

    return (
        <div className="app__video" id="trailer">
            <video
                ref={vidRef}
                src={"/gameplay.mp4"}
                type="video/mp4"
                loop
                controls={false}
            />
            <div className="app__video-overlay flex__center">
                <div
                    className="app__video-overlay_circle flex__center"
                    onClick={() => {
                        setPlayVideo(!playVideo);
                        if (playVideo) {
                            vidRef.current.pause();
                        } else {
                            vidRef.current.play();
                        }
                    }}
                >
                    {playVideo
                        ? <BsPauseFill    color="#fff" fontSize={30} />
                        : <BsFillPlayFill color="#fff" fontSize={30} />
                    }
                </div>
            </div>
        </div>
    );
}

export default Video;