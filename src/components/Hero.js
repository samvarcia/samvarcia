import React from 'react'
import samvarcia from '../assets/images/SamuelGarcia.png'
import samvarciaMobile from '../assets/images/mobileSamuelGarcia.png'
import '../assets/styles/components/Hero.css'
import WOW from 'wowjs';

class Hero extends React.Component { 
  componentDidMount() {
    new WOW.WOW().init();
  }
  render() {
    return(
      <div className="Hero wow animate__fadeIn" data-wow-duration="3s">
        <div className="Hero_container">
          <div className="Hero_content">
            <img className="mobilesam " src={samvarciaMobile} alt="Samuel García - Frontend Developer"/>
            <img className="desktopsam"  src={samvarcia} alt="Samuel García - Frontend Developer"/>
            <div className="Hero_copy">
              <ul>
                <p>Frontend Developer</p>
                <p className="grabient">UI/UX Designer</p>
                <p>Entrepreneur</p>
              </ul>
              <a className="grabient" href="mailto:samvarcia@gmail.com">s@samvarcia.com</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Hero;