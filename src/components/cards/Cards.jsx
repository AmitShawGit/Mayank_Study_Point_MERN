import React from 'react'
import Card from 'react-bootstrap/Card';
import './cards.scss'
const Cards = ({cardText , bgImg}) => {
  return (
    <>
      <Card  style={{background:`url(${bgImg})`}} className='cards'>
      <Card.Body className='card-body'>
        <Card.Title className='title'>{cardText}</Card.Title>
      </Card.Body>
    </Card>
    </>
  )
}

export default Cards
