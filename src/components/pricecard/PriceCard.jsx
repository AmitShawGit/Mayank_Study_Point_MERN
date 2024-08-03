import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import './style.scss';

const PriceCard = ({ head, features, path, goToPay }) => {
  let feature = features
  let navigate = useNavigate()

  let goToPayment = (val, id, head) => {
    let specificItem = val.find((item) => item.id === id)
    let additionalData = {
      head: head
    }
    specificItem = { ...specificItem, ...additionalData }
    sessionStorage.setItem("productInfo", JSON.stringify(specificItem));

    navigate(`/Phonepay/${id}`)
  }
  return (
    <div>
      <Card className="border-primary" >
        <Card.Header className='feature'>{head}</Card.Header>
        <Card.Body className='body-section'>
          <ul className='list-none'>
            {feature.map((item,index) => {
              return (
                <>
                  <li key={item.id} onClick={() => goToPayment(goToPay, item.id, head)}>
                    <div className="d-flex align-items-center justify-content-between w-100">
                      <div>
                        <p>{item.Packagename}</p>
                        <span>{item.desc} <del>{item.del} </del>&nbsp;</span>
                      </div>
                      <div className='price'>
                        Rs. {item.price}
                      </div>
                    </div>
                  </li>
                </>
              )
            })}
          </ul>
        </Card.Body>
        <Card.Footer className='feature'>
          <Link to={path} variant="primary" className='links'>More Info</Link>
        </Card.Footer>
      </Card>
    </div>
  )
}

export default PriceCard
