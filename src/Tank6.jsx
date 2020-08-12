import React from 'react';
import './App.css';
import useWebAnimations from "@wellyshen/use-web-animations";




const Tank6 = () => {

  const { ref } = useWebAnimations({

    keyframes: [
      { transform: 'translate(0,0px)' },
      { transform: 'translate(500px,0px)' },
    ],

    timing: {

      duration: 245000,
      iterations: 1,
      easing: 'ease-in-out',



    },
  });

  return (

    <div className="tank6" ref={ref}>
      <img src="/images-And-Sound/tank6.gif" alt="tank_image" />
    </div>


  );
}
export default Tank6;