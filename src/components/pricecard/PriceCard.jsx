import React from 'react'
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import './style.scss'
const PriceCard = ({ head, price, features, path }) => {
  let feature = features
  return (
    <div>
      <Card className="text-center border-primary">
        <Card.Header className='feature'>{head}</Card.Header>
        <Card.Body>
          <Card.Title className='price'>{price}</Card.Title>
          <ul className='list-none'>
            {feature.map((item, index) => {
              return (
                <li key={index}>{item.name}</li>
              )
            })
            }
          </ul>

        </Card.Body>
        <Card.Footer className='feature'>
          <Link to={path} variant="primary" className='links'>Go somewhere</Link>
        </Card.Footer>
      </Card>
    </div>
  )
}

export default PriceCard
