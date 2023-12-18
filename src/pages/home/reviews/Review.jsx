import React from 'react'
import ContentWrapper from '../../../components/wrapper/ContentWrapper';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import janta from '../../../assets/janta.png'
import Img from '../../../components/lazyloading/LazyLoading';

const Review = () => {
    return (
        <>
            <ContentWrapper>
                <h2 className='heading'>Student's Review</h2>
                <Row className='d-flex align-items-center'>
                    <Col md={4}>
                        <Img src={janta} className="img-fluid" />
                    </Col>
                    <Col md={8} className='review'>
                        <p className='text-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et cum aut, perferendis illum odio fugit sint sequi facere repellendus quos.</p>
                    <p className='text-primary text-20'>- Amit Shaw</p>
                    </Col>
                </Row>
            </ContentWrapper>
        </>
    )
}

export default Review
