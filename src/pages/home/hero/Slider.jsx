import React from 'react'

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import menHero from '../../../assets/manhero1.png'
import poster from '../../../assets/poster1.png'

const Sliders = () => {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  let sliderImages = [
    { img: `${menHero}`, alt: "Hero-Img" },
    { img: `${poster}`, alt: "Hero-Img" }
  ]
  return (
    <>
      <div className="hero-Bg">
        <Slider {...settings}>
          {sliderImages.map((img, index) => (
            <div key={index}>
              <img src={img.img} alt={img.alt} className='img-fluid' />
            </div>
          ))}
        </Slider>
      </div>
    </>

  )
}

export default Sliders;
