import React from "react";
import ReactAudioPlayer from 'react-audio-player';



const Player = () => {


  return (
    <div>

      <ReactAudioPlayer
        src="/images-And-Sound/pak.mp3"
        autoPlay
        controls
      />
    </div>
  );
}
export default Player;