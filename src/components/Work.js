import React from 'react'
import Card from '../components/Card'
import '../assets/styles/components/Work.css'

export default function Work() {
  return(
    <div className="Work">
      <div className="Work_container">
        <div className="Work_content">
          <h1>WORK</h1>
          <Card 
            CardTitle="UziDay - CEO"
            CardText="This was my first startup release, at the age of 14 (Now 16), we were creating a productivity application with gamification"
            CardLink="https://www.dinero.com/edicion-impresa/management/articulo/historia-de-samuel-garcia-cofundador-de-uziday/266407"
          />
          <Card 
            CardTitle="Meniacs - Founder"
            CardText="I created this clothing store to reflect all that tech culture means to me and many more people"
            CardLink="https://meniacs.co/"
          />
          <Card 
            CardTitle="Ziggy - Developer"
            CardText="Tool to play with samples of different instruments."
            CardLink="https://ziggy.samvarcia.vercel.app/"
          />
        </div>
      </div>
    </div>
  )
}