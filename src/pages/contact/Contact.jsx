import React from 'react'
import ContentWrapper from '../../components/wrapper/ContentWrapper'
import Form from './Form'
import FormDesign from './FormDesign'
import { Col, Row } from 'react-bootstrap'
const Contact = () => {

    return (
        <div>
            <ContentWrapper>

                <div className="heading-section text-center">
                    <h1 className='heading pb-2'>Contact Us</h1>
                    <p>Any Question or remarks? Just write us a message</p>
                </div>
                <div className="card mt-3">
                    <div className="card-body p-0">

                        <Row>
                            <Col><FormDesign /></Col>
                            <Col className='p-5'><Form /></Col>
                        </Row>

                    </div>
                </div>
            </ContentWrapper>
        </div>
    )
}

export default Contact
