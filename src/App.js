import React from 'react';
import Header from './components/Header'
import Hero from './components/Hero'
import Work from './components/Work'
import About from './components/About'
import Rayo from './assets/images/rayo.svg'
import Sticker from './assets/images/sticker.svg'
import Planet from './assets/images/planet.svg'
import './assets/styles/App.scss';

function App() {
  return (
    <>
      <img className="light" src={Rayo} alt="Light"/>
      <img className="sticker" src={Sticker} alt="Holo"/>
      <img className="planet" src={Planet} alt="Pluto"/>
      <div className="App">
        <Header/>
        <Hero/>
        <Work/>
        <About/>
      </div>
    </>
  );
}

export default App;
