import React, { useState } from 'react'
import ContentWrapper from '../../../components/wrapper/ContentWrapper'
import Img from '../../../components/lazyloading/LazyLoading'
import sectionImg from '../../../assets/intro.png'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.scss'
const Learning = () => {
    let [animate, setAnimate] = useState(false)
    return (
        <>
            <ContentWrapper>
                <Row className='py-5'>
                    <Col md={6}>
                        <Img src={sectionImg} className="img-fluid" />
                    </Col>
                    <Col md={6}>
                        <h2 className='heading'>Limitless learning more possibilities</h2>
                        <p className='description'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                        <Row className='text-center'>
                            <Col md={4} className='text-orange'>
                                <ScrollTrigger onEnter={() => setAnimate(true)} onExit={() => setAnimate(false)}>
                                    {animate && <h3><CountUp start={0} end={1456} duration={8} style={{fontSize:"1.76rem"}}/>+</h3>}
                                </ScrollTrigger>
                                <p>Students</p>
                            </Col>
                            <Col md={4} className='text-pink'>
                            {animate && <h3><CountUp start={0} end={260} duration={5} style={{fontSize:"1.76rem"}}/>+</h3>}
                                <p>Courses</p>
                            </Col>
                            <Col md={4} className='text-blue'>
                            {animate && <h3><CountUp start={0} end={576} duration={5} style={{fontSize:"1.76rem"}}/>+</h3>}
                                <p>Watch Hours</p>
                            </Col>

                        </Row>
                    </Col>
                </Row>
            </ContentWrapper>
        </>
    )
}

export default Learning
