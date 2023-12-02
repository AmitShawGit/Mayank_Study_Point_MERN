import React from 'react'
import "./style.scss"
import ContentWrapper from '../../../components/wrapper/ContentWrapper'
import Img from '../../../components/lazyloading/LazyLoading'
import menHero from '../../../assets/manhero1.png'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <>
      <div className="heroBg">
        <ContentWrapper>
          <Row className='hero'>
            <Col md={6}>
              <h2>We are with students from starting to end</h2>
            <p>Hello visitors, this is my little effort to help the <strong>#NMIMS</strong> MBA students. Here I have shares the references to help you guys get a pathway of the answers for the NMIMS assignment. I am sure my visitors will benefit by watching videos and contacting us !
            </p>
            <Link to="/contact" className='btn btn-primary'>Contact Us</Link>
            </Col>
            <Col md={6} className='right-section'>
              
                <div className="eclipse"></div>
                <div className="men-img">
                  <Img src={menHero} />
                </div>
          
            </Col>
          </Row>
        </ContentWrapper>
      </div>
    </>
  )
}

export default Hero
