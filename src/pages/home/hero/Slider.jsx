import React, { useEffect, useState } from 'react'
import apiCall from '../../../services/index.ts';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const Sliders = () => {
  let imgURL = process.env.REACT_APP_BASE_URL + "uploadSlider/"
 
  let [sliderImage, setSliderImage] = useState([]);

  let getImages = () => {
    apiCall.get("/view-slider")
      .then((res) => { setSliderImage(res.data) })
      .catch((error) => { console.log(error.message); })
  }

  useEffect(() => {
    getImages()
  }, [])
  return (
    <>
      <div className="hero-Bg">
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}

          slidesPerView={"1"}
          spaceBetween={30}
          className="mySwiper"

        >
          {sliderImage.map((img, index) => (
            <SwiperSlide key={index}>

              <img src={img.sliderImage ? imgURL + img.sliderImage : ""} alt={img.alt} className='img-fluid w-100' />

            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>

  )
}

export default Sliders;
