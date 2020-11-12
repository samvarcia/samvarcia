import React from 'react'
import '../assets/styles/components/Card.css'

const Card = ({ CardTitle, CardText, CardLink }) => (
  <>
    <a className="cardlink" href={CardLink}>
      <div className="card">
        <div className="card_container">
          <div className="card_content"> 
            <h2 className="justify">{CardTitle}</h2>
            <p className="justify">{CardText}</p>
            <a target="blank" className="center" href={CardLink}>VIEW</a>
          </div>
        </div>
      </div>
    </a>
  </>
)

export default Card;