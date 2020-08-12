import React from 'react';
import './App.css';
import useWebAnimations from "@wellyshen/use-web-animations";




const Tank3 = () => {

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

    <div className="tank3" ref={ref}>
      <img src="/images-And-Sound/tank3.gif" alt="tank_image" />
    </div>


  );
}
export default Tank3;