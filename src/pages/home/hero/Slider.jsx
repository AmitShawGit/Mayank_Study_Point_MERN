import React, { useEffect, useState, useMemo, useCallback } from 'react'
import apiCall from '../../../services/index.ts';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { Loader } from '../../../components/lazyloading/Loader.jsx';



const MemoSlide = ({ image, alt, isFirst, key }) => {

  return (
    <SwiperSlide key={key}>

      <img src={image} alt={alt} className='img-fluid w-100' loading={isFirst ? 'eager' : 'lazy'} />

    </SwiperSlide>)
}

const Sliders = () => {
  let imgURL = useMemo(() => { return process.env.REACT_APP_BASE_URL + "uploadSlider/" }, [])
  let [sliderImage, setSliderImage] = useState([]);
  const [loading, setLoading] = useState(true);

  let getImages = useCallback(() => {
    apiCall.get("/view-slider")
      .then((res) => { setSliderImage(res.data); setLoading(false) })
      .catch((error) => { console.log(error.message); })
  }, [])

  useEffect(() => {
    getImages();
  }, [])

  if (loading) return <Loader />

  return (
    <>

      <div className="hero-Bg">
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          cssMode={true}
          lazyPreloadPrevNext={1}
          slidesPerView={"1"}
          spaceBetween={0}
          className="mySwiper"

        >
          {sliderImage.map((img, index) => (

            <MemoSlide
              image={img.sliderImage ? imgURL + img.sliderImage : ""}
              alt={img.alt || "img alternative"}
              key={img.id}
              isFirst={index == 0}

            />
          )

          )}
        </Swiper>
      </div>

    </>

  )
}

export default Sliders;
