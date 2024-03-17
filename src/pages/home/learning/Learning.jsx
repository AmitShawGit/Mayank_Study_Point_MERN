import React, { useState } from 'react'
import ContentWrapper from '../../../components/wrapper/ContentWrapper'
import Img from '../../../components/lazyloading/LazyLoading'
import sectionImg from '../../../assets/intro.png'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Learning = () => {
    let [animate, setAnimate] = useState(false)
    return (
        <>
            <ContentWrapper>
                <Row className='py-5 align-items-center'>
                    <Col md={6}>
                        <Img src={sectionImg} className="img-fluid" />
                    </Col>
                    <Col md={6}>
                        <h2 className='heading'>Limitless learning more possibilities</h2>
                        {/* <p className='description'>
                            This website is all about learning through presentations with easy lectures, the basic aim of this website is to spread knowledge, on different topics, in an understandable language through PowerPoint presentations (PPTs) and on camera. As everything is going digital, so why not the way we study also become digital and easy, with the help of presentations one can learn/study more easily and quickly as compared to reading long paragraphs in different books. PPT makes the way of study very easy and effective. Subscribe and learn about different topics from your courses as well as the mind-blowing ideas of making college class presentations, office presentations, and a lot more. You will start learning even those topics which you never heard of, in a very easy and understandable language, Hindi.
                        </p> */}
                        <p className='description'>
                            Welcome to Mayank's Study Point!

                            Embark on a journey of knowledge and discovery through engaging presentations and easy-to-follow lectures. Our website is dedicated to spreading knowledge across various topics, all presented in a language that is simple and understandable.

                            In today's digital age, learning should be as accessible and convenient as possible. That's why we leverage the power of PowerPoint presentations (PPTs) and on-camera instruction to make studying a breeze. Say goodbye to long paragraphs in textbooks and hello to a more efficient way of learning.

                            By subscribing to Mayank's Study Point, you'll gain access to a treasure trove of educational content covering everything from your course curriculum to innovative ideas for college and office presentations. Our aim is to not only help you excel in your studies but also to spark your curiosity and introduce you to new concepts and ideas.

                            Whether you're a student struggling with complex subjects or someone looking to enhance their presentation skills, we've got you covered. Our content is presented in Hindi, ensuring that language is never a barrier to learning.

                            Additionally, we offer assistance with assignments and projects from various universities, ensuring that you have all the support you need to succeed academically.

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
