"use client";

import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const Player = () => {

    const [path, setPath] = React.useState('./audio/track1.mp3');
    const nextTrack = () => {
        
        
        
  
        const ranNum = Math.floor(Math.random() * 10+1);
        setPath(`./audio/track${ranNum}.mp3`);
        
  
        
              
        
        }
  return (
    <AudioPlayer src={path} onEnded={nextTrack} showJumpControls={false} customProgressBarSection={[]}
    customAdditionalControls={[]} customVolumeControls={[]} className="rounded-xl" />
  );
}

export default Player;
