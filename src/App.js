import React from 'react';
import { Instagram } from 'react-feather';
import { Twitter } from 'react-feather';
import { GitHub } from 'react-feather';
import samvarcia from './assets/images/samvarcia.svg'
import './assets/styles/App.scss';

function App() {
  return (
    <div className="App">
      <img className="landing_img" src={samvarcia} alt="Samuel García"/>

      <div className="sidebar">
        <div className="sidebar_container">
          <div className="sidebar_content">
            <a href=""><h1>work</h1></a>
            <nav>
              <ul>
                <li><a href="https://www.instagram.com/samvarcia/" target="blank"><Instagram color="white" size={35} /></a></li>
                <li><a href="https://twitter.com/samvarcia" target="blank"><Twitter color="white" size={35} /></a></li>
                <li><a href="https://github.com/samvarcia" target="blank"><GitHub color="white" size={35} /></a></li>
              </ul>
            </nav>
            <a href=""><h1>about</h1></a>
          </div>
        </div>
      </div>

      <div className="hero">
        <div className="hero-content">
          <h1><span>I´m</span> a <br/> idea <span>builder</span></h1>
          <p>Frontend Developer - Entrepreneur - Teen</p>
          <p>HOLA</p>
        </div>
      </div>
      
    </div>
  );
}

export default App;
