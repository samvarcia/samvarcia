import React from 'react'
import Card from '../components/Card'
import '../assets/styles/components/Work.css'
import WOW from 'wowjs';

class Work extends React.Component {
  componentDidMount() {
    new WOW.WOW().init();
  }
  render() {
      return(
        <div className="Work wow animate__fadeIn" data-wow-duration="6s" data-wow-offset="50" >
          <div className="Work_container">
            <div className="Work_content">
              <h1 className="">WORK</h1>
                <Card 
                  className="wow animate__slideInLeft" data-wow-duration="3s"
                  CardTitle="UziDay - CEO"
                  CardText="This was my first startup release, at the age of 14 (Now 16), we were creating a productivity application with gamification"
                  CardLink="https://www.dinero.com/edicion-impresa/management/articulo/historia-de-samuel-garcia-cofundador-de-uziday/266407"
                />
              <Card 
                CardTitle="Lesly Zerna's portfolio - Freelancer"
                CardText="Freelancer job created for software developer Lesly Zerna, developed with ReactJS and designed with Figma."
                CardLink="https://lesly.vercel.app/"
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
}

export default Work;