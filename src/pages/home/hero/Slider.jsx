import React from 'react'

import Slider from "react-slick";
import ContentWrapper from '../../../components/wrapper/ContentWrapper';
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img from '../../../components/lazyloading/LazyLoading'
import menHero from '../../../assets/manhero1.png'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
const Sliders = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

  return (
    <>
 
    <div className='slider-hero'>
       <Slider {...settings}>
      <div>
      <div className="heroBg">
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
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
    </div>
 
    </>
   
  )
}

export default Sliders;
