import React from 'react';
import Header from './components/Header'
import Hero from './components/Hero'
import Work from './components/Work'
import Rayo from './assets/images/rayo.svg'
import Sticker from './assets/images/sticker.svg'
import './assets/styles/App.scss';

function App() {
  return (
    <>
      <img className="light" src={Rayo} alt="Light"/>
      <img className="sticker" src={Sticker} alt="Holo"/>
      <div className="App">
        <Header/>
        <Hero/>
        <Work/>
      </div>
    </>
  );
}

export default App;
