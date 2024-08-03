import React, { useEffect, useState } from 'react'
import apiCall from '../../../services/index.ts';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const Sliders = () => {
  let imgURL = process.env.REACT_APP_BASE_URL + "uploadSlider/"
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,

    autoplay: true,
    speed: 1500,
    autoplaySpeed: 1000,
    cssEase: "linear"
  };
  let [sliderImage, setSliderImage] = useState([]);

  let getImages = () => {
    apiCall.get("/view-slider")
      .then((res) => { setSliderImage(res.data) })
      .catch((error) => { console.log(err.message); })
  }

  useEffect(() => {
    getImages()
  }, [])
  return (
    <>
      <div className="hero-Bg">
        <Slider {...settings}>
          {sliderImage.map((img, index) => (
            <div key={index}>
              <img src={img.sliderImage ? imgURL + img.sliderImage : ""} alt={img.alt} className='img-fluid' />
            </div>
          ))}
        </Slider>
      </div>
    </>

  )
}

export default Sliders;
