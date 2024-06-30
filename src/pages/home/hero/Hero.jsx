import React from 'react'
import Img from '../../../components/lazyloading/LazyLoading'
import menHero from '../../../assets/manhero.png'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <>

      <div className='heroBg'>
        <div className="container">
          {/* old hero  */}
          <Row className='hero'>
            <Col md={6}>
              <h1>"We are with students from starting to end."</h1>
              <p>Embark on a seamless journey to academic success with our dedicated platform. This space is crafted to empower students like you in conquering assignments with confidence. Discover a wealth of resources and references curated to guide you through your academic quests</p>
              <Link to="/contact" className='btn btn-primary'>Contact Us</Link>
            </Col>
            <Col md={6} className='right-section'>

              <div className="eclipse"></div>
              <div className="men-img">
                <Img src={menHero} />
              </div>

            </Col>
          </Row>
        </div>
      </div>
    </>
  )
}

export default Hero
