import React from 'react'
import ContentWrapper from '../../../components/wrapper/ContentWrapper'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PriceCard from '../../../components/pricecard/PriceCard';
const Pricing = () => {
    return (
        <div>
            <ContentWrapper>
                <Row>
                    <Col size={4}>
                        <PriceCard
                            head="Features"
                            price="$10"
                            list={['Item 1', 'Item 2', 'Item 3']}
                            path="/some-path"
                        />

                    </Col>
                </Row>
            </ContentWrapper>
        </div>
    )
}

export default Pricing
