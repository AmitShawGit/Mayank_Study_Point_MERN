import React from 'react'
import "./style.scss"
import ContentWrapper from '../../../components/wrapper/ContentWrapper'
import Img from '../../../components/lazyloading/LazyLoading'
import menHero from '../../../assets/manhero1.png'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap'
const Hero = () => {
  return (
    <>
      <div className="heroBg">
        <ContentWrapper>
          <Row className='hero'>
            <Col md={6}>
              <h2>We are with students from starting to end</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus quam, sit repellendus dicta, nemo ex et sed quas officia, rem explicabo natus exercitationem ipsum provident Maiores corrupti et pariatur animi</p>
            <Button className='btn btn-primary'>Contact Us</Button>
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
