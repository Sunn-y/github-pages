import React from 'react';
import '../styles/HomePage.scss'

import MainImg from '../assets/img/main.png'

const HomePage = (): JSX.Element => {
  return (
    <div>
      <div className="main-text">
        <div>HELLO. I'M SUNNY,</div> 
        <div>FRONT-END DEVELOPER!</div>
      </div>
      <img src={MainImg} alt="main.png" width="500" />
    </div>
  );
}

export default HomePage;
