import React from 'react';
import './App.css';
import useWebAnimations from "@wellyshen/use-web-animations";


const Banner = () => {

  const { ref } = useWebAnimations({
    keyframes: [

      { transform: 'translate(0,0)' },
      { transform: 'translate(200px,200px)' },
      { transform: 'translate(200px,200px)' },
      { transform: 'translate(200px,200px)' },
      { transform: 'translate(200px,200px)' },
      { transform: 'translate(200px,200px)' },
    ],

    timing: {

      delay: 2,
      duration: 3000,
      iterations: 1,
      easing: 'ease-in-out',
    },
  });

  return (

    <div className="banner" ref={ref}>
      <h1>پاکستان اور (ہندوستان اسرائیل) کے مابین حتمی جنگ شروع ہونے والی ہے۔
      </h1>
    </div>
  );
}
export default Banner;
