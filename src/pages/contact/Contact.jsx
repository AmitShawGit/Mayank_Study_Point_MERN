import React from 'react'
import ContentWrapper from '../../components/wrapper/ContentWrapper'
import Form from './Form'
import FormDesign from './FormDesign'
import { Col, Row } from 'react-bootstrap'
const Contact = () => {
    
    return (
        <div>
            <ContentWrapper>
                <Row className='mt-5 formBackground'>
                    <Col><FormDesign /></Col>
                    <Col><Form /></Col>
                </Row>
                

            </ContentWrapper>
        </div>
    )
}

export default Contact
