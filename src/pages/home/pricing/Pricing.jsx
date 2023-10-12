import React from 'react'
import ContentWrapper from '../../../components/wrapper/ContentWrapper'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PriceCard from '../../../components/pricecard/PriceCard';
const Pricing = () => {
    const output = [
        {
            id: 1,
            head: "Features",
            price: "$10",
            features: [
                { id: 1, name: 'Item 2' },
                { id: 2, name: 'item2' }
            ],
            path: "/some-path",
        },
        {
            id: 2,
            head: "Features",
            price: "$10",
            features: [
                { id: 1, name: 'Item 2' },
                { id: 2, name: 'item2' }
            ],
            path: "/some-path",
        },
        {
            id: 3,
            head: "Features",
            price: "$10",
            features: [
                { id: 1, name: 'Item 2' },
                { id: 2, name: 'item2' }
            ],
            path: "/some-path",
        },
    ]
    return (
        <div>
            <ContentWrapper>
                <h2 className='heading'>Our Services</h2>
                <Row>
                {output.map((item, index) => 
                 <Col md={4}  key={index}>
                         <PriceCard                         
                            head={item.head}
                            price={item.price}
                            features={item.features}
                            path={item.path}
                        />
                     
                    </Col>   )}
                </Row>
            </ContentWrapper>
        </div>
    )
}

export default Pricing
