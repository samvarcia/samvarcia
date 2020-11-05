import React from 'react'
import '../assets/styles/components/About.css'

export default function About() {
  return(
    <div className="About">
      <div className="About_container">
        <div className="About_content">
          <h1>ABOUT ME</h1>
          <div className="about_text">
            <p>Hello i’m <span className="grabient">Samuel García</span> a 16 years old
            frontend developer from Colombia.</p>
            <p>My journey in <span className="grabient">tech</span> starts when i was
            13 and watch “The Social Network” movie, since that moment i 
            decided to <span className="grabient">create</span> tech and not only consume.</p>
            <p>Started to study in online platforms like <a className="grabient" href="https://youtu.be/icswdA7LAzA">Platzi</a> (Click to see my talk), read books and documentation. This has led me to create a <span className="grabient">startup</span>, work as a <span className="grabient">freelancer</span>, launch a <span className="grabient">clothing brand</span>, meet wonderful people and give a direction to my life.</p>
            <p>I love doing this, I like working in <span className="grabient">teams</span> to achieve a common mission, I have learned a lot and I want to do it more!</p>
            <p>Like retro music, <span className="grabient">skateboards</span>, space exploration, indie movies and CODE</p>
          </div>
        </div>
      </div>
    </div>
  )
}