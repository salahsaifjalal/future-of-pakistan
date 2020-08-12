import React from 'react';
import './App.css';
import useWebAnimations from "@wellyshen/use-web-animations";



const Jet3 = () => {

  const { ref } = useWebAnimations({
    keyframes: [
      { transform: 'translate(0,0px)' },
      { transform: 'translate(600px,100px)' },
      { transform: 'translate(900px,700px)' },
    ],
    timing: {

      delay: 3000,
      duration: 5000,
      iterations: 47,
      easing: 'ease-in-out',
    },
  });

  return (

    <div>
      <div className="jet3" ref={ref}>
        <img src="/images-And-Sound/jet3.gif" alt="jetImage" /></div>

    </div>

  );
}
export default Jet3;
