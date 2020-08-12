import React from 'react';
import './App.css';
import useWebAnimations from "@wellyshen/use-web-animations";




const Tank2 = () => {

  const { ref } = useWebAnimations({

    keyframes: [
      { transform: 'translate(0,0px)' },
      { transform: 'translate(-500px,0px)' },
    ],

    timing: {

      duration: 245000,
      iterations: 1,
      easing: 'ease-in-out',



    },
  });

  return (

    <div className="tank2" ref={ref}>
      <img src="/images-And-Sound/tank2.gif" alt="tank_image" />
    </div>


  );
}
export default Tank2;