import React from 'react'
import ContentWrapper from '../../../components/wrapper/ContentWrapper';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import janta from '../../../assets/janta.png'
import Img from '../../../components/lazyloading/LazyLoading';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


const Review = () => {
    return (
        <>
      
       
     
            <ContentWrapper>
                <h2 className='heading'>Student's Review</h2>
                <Swiper
                autoplay={true}
        slidesPerView={'auto'}
        spaceBetween={30}
        className="mySwiper"
      >
                <SwiperSlide>
                <Row className='d-flex align-items-center'>
                    <Col md={4}>
                        <Img src={janta} className="img-fluid" />
                    </Col>
                    <Col md={8} className='review'>
                        <p className='text-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et cum aut, perferendis illum odio fugit sint sequi facere repellendus quos.</p>
                    <p className='text-primary text-20'>- Amit Shaw</p>
                    </Col>
                </Row>
                </SwiperSlide>
                <SwiperSlide>
                <Row className='d-flex align-items-center'>
                    <Col md={4}>
                        <Img src={janta} className="img-fluid" />
                    </Col>
                    <Col md={8} className='review'>
                        <p className='text-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et cum aut, perferendis illum odio fugit sint sequi facere repellendus quos.</p>
                    <p className='text-primary text-20'>- Amit Shaw</p>
                    </Col>
                </Row>
                </SwiperSlide>
                <SwiperSlide>
                <Row className='d-flex align-items-center'>
                    <Col md={4}>
                        <Img src={janta} className="img-fluid" />
                    </Col>
                    <Col md={8} className='review'>
                        <p className='text-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et cum aut, perferendis illum odio fugit sint sequi facere repellendus quos.</p>
                    <p className='text-primary text-20'>- Amit Shaw</p>
                    </Col>
                </Row>
                </SwiperSlide>
            </Swiper>
            </ContentWrapper>
        </>
    )
}

export default Review
