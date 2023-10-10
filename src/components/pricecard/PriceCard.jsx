import React from 'react'
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import './style.scss'
const PriceCard = (props) => {
    
  return (
    <div>
       <Card className="text-center border-primary">
      <Card.Header className='feature'>{props.head}</Card.Header>
      <Card.Body>
        <Card.Title className='price'>{props.price}</Card.Title>
        <ul className='list-none'>
           { props.list.map((item)=>{
                return(
                    <li key={item.id}>{item.listItem}</li>
                )
            })
           }
        </ul>
        
      </Card.Body>
      <Card.Footer className='feature'>
        <Link to={props.path} variant="primary">Go somewhere</Link>
        </Card.Footer>
    </Card>
    </div>
  )
}

export default PriceCard
