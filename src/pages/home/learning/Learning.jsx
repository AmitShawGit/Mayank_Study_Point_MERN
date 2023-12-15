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
                            This website is all about learning through presentations with easy lectures, the basic aim of this website is to spread knowledge, on different topics, in an understandable language through PowerPoint presentations (PPTs) and on camera. As everything is going digital, so why not the way we study also become digital and easy, with the help of presentations one can learn/study more easily and quickly as compared to reading long paragraphs in different books. PPT makes the way of study very easy and effective. Subscribe and learn about different topics from your courses as well as the mind-blowing ideas of making college class presentations, office presentations, and a lot more. You will start learning even those topics which you never heard of, in a very easy and understandable language, Hindi.
                        </p>
                        <Row className='text-center'>
                            <Col md={4} className='text-orange'>
                                <ScrollTrigger onEnter={() => setAnimate(true)} onExit={() => setAnimate(false)}>
                                    {animate && <h3><CountUp start={0} end={4123} duration={8} style={{ fontSize: "1.76rem" }} />+</h3>}
                                </ScrollTrigger>
                                <p>Students</p>
                            </Col>
                            <Col md={4} className='text-pink'>
                                {animate && <h3><CountUp start={0} end={3897} duration={5} style={{ fontSize: "1.76rem" }} />+</h3>}
                                <p>Happy Customers</p>
                            </Col>
                            <Col md={4} className='text-blue'>
                                {animate && <h3><CountUp start={0} end={7658} duration={5} style={{ fontSize: "1.76rem" }} />+</h3>}
                                <p>Assignments and Projects</p>
                            </Col>

                        </Row>
                    </Col>
                </Row>
            </ContentWrapper>
        </>
    )
}

export default Learning
