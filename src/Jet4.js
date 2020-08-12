import React from 'react';
import './App.css';
import useWebAnimations from "@wellyshen/use-web-animations";




const Jet4 = () => {

  const { ref } = useWebAnimations({
    keyframes: [
      { transform: 'translate(0,100px' },
      { transform: 'translate(700px,100px)' },
      { transform: 'translate(800px,700px)' },
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
      <div className="jet4" ref={ref}>
        <img src="/images-And-Sound/jet4.gif" alt="jetImage" />
      </div>
    </div>


  );
}
export default Jet4;
