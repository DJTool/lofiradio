"use client"

import Image from "next/image";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useState } from "react";
import { GoogleAnalytics } from '@next/third-parties/google'

export default function Home() {

  const [path, setPath] = useState(`./audio/track1.mp3`);

  const nextTrack = () => {  
    const ranNum = Math.floor(Math.random() * 10+1);
    setPath(`./audio/track${ranNum}.mp3`);
     
    }

  
  return (<>
  <GoogleAnalytics gaId="" />
    <AudioPlayer src={path} onEnded={nextTrack} showJumpControls={false} customProgressBarSection={[]}
        customAdditionalControls={[]} customVolumeControls={[]} className="rounded-xl" />
  </>
  );
}
