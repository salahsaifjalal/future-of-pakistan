import React from 'react';
import './App.css';
import useWebAnimations from "@wellyshen/use-web-animations";
import PlayCircleFilledTwoToneIcon from '@material-ui/icons/PlayCircleFilledTwoTone';
import PauseCircleFilledTwoToneIcon from '@material-ui/icons/PauseCircleFilledTwoTone';
import Tank2 from './Tank2';
import Player from './Player';
import Jet3 from './Jet3';
import Jet4 from './Jet4';
import Fire4 from './Fire4';
import Fire4a from './Fire4a';
import Fire4b from './Fire4b';
import Fire3 from './Fire3';
import Banner from './Banner';
import Baner from './Baner';
import Tank3 from './Tank3';
import Tank6 from './Tank6';
import Fire4c from './Fire4c';
import Fire5 from './Fire5';
import FlagPak from './FlagPak';
import Fire5a from './Fire5a';
import FlagI from './FlagI';
import FlagP from './FlagP';
import FlagIS from './FlagIS';
import Ship11 from './Ship11';
import Ship12 from './Ship12';
import Gun1 from './Gun1';
import Fire5b from './Fire5b';
import Fire5c from './Fire5c';
import Fire5d from './Fire5d';

const App = () => {


  const { ref, getAnimation } = useWebAnimations({

    keyframes: [
      { transform: 'translate(0,0)' },
      { transform: 'translate(-1700px,0px)' },

    ],

    timing: {

      delay: 4000,
      duration: 5000,
      iterations: 48,
      easing: 'ease-in-out',

    },
  });

  return (


    
    <div>
  
     <div className="sea16"></div>
      <div className="fields"></div>

      <Banner />
      <Baner />
      <Tank2 />
      <Tank3 />
      <Tank6 />
      <Player />
      <Jet3 />
      <Jet4 />
      <Fire3 />
      <Fire4 />
      <Fire4a />
      <Fire4b />
      <Fire4c />
      <Fire5 />
      <Fire5a />
      <FlagPak />
      <FlagI />
      <FlagP />
      <FlagIS />
      <Ship11 />
      <Ship12 />
      <Gun1 />
      <Fire5b />
      <Fire5c />
      <Fire5d />

      <div>
        <div className="jet1" ref={ref}>
          <img src="/images-And-Sound/jet1.gif" alt="jetImage" /></div>
        <button onClick={() => getAnimation().pause()}><PauseCircleFilledTwoToneIcon /></button>
        <button onClick={() => getAnimation().play()}><PlayCircleFilledTwoToneIcon /></button>
      </div>
    </div>

  );
}

export default App;
