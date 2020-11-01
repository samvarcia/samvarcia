import React from 'react'
import samvarcia from '../assets/images/NameIs.svg'

import '../assets/styles/components/Hero.css'

export default function Hero() {
  return(
    <div className="Hero">
      <div className="Hero_container">
        <div className="Hero_content">
          <img src={samvarcia} alt="Samuel García"/>
          <div className="Hero_copy">
            <ul>
              <p>Frontend Developer</p>
              <p>UI/UX Designer</p>
              <p>Entrepreneur</p>
            </ul>
            <a href="mailto:samvarcia@gmail.com">s@samvarcia.com</a>
          </div>
        </div>
      </div>
    </div>
  )
}