import React, { useEffect, useState } from 'react'
import ContentWrapper from '../../../components/wrapper/ContentWrapper';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Img from '../../../components/lazyloading/LazyLoading';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import apiCall from '../../../services/index.ts'

const Review = () => {
    let imgURL = process.env.REACT_APP_BASE_URL + "upload/"
    let [reviews, setReviews] = useState([]);
    
    //fetch reviews
    let fetchServices = async () => {
        try {
            await apiCall.get('/view-review')
                .then((response) => setReviews(response.data))
                .catch((err) => err)
        } catch (err) {
        }

    }
    useEffect(() => { fetchServices() }, [])
    return (
        <>
            <ContentWrapper>
                <h2 className='heading'>Student's Review</h2>
                <Swiper
              modules={[Autoplay]}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                    }}
                    
                    slidesPerView={"2"}
                    spaceBetween={30}
                    className="mySwiper"

                >
                    {reviews.map((item) => {
                        return (
                            <SwiperSlide key={item.id}>
                                <Row className='d-flex align-items-center'>
                                    <Col md={4}>
                                        <Img src={imgURL + item.image} className="img-fluid" />
                                    </Col>
                                    <Col md={8} className='review'>
                                        <p>{item.user_comment}</p>
                                        <p className='text-primary text-20'>- {item.user_name}</p>
                                    </Col>
                                </Row>
                            </SwiperSlide>
                        )
                    })}


                </Swiper>
            </ContentWrapper>
        </>
    )
}

export default Review
