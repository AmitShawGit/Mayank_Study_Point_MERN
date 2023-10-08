import React from 'react';
import Card from 'react-bootstrap/Card';
import './cards.scss'
const Cards = ({cardText , bgImg , icon}) => {
  return (
    <>
      <Card  style={{background:`url(${bgImg})`}} className='cards'>
    <span className="pink-overlay"></span>
      <Card.Body className='card-body'>
        <Card.Title className='title'>
          <p><i className={`${icon} icon`}></i></p>
          <p className='text'>{cardText}</p>
          </Card.Title>
      </Card.Body>
    <span className="blue-overlay"></span>
    </Card>
    </>
  )
}

export default Cards
