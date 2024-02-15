import React from 'react'
import ContentWrapper from '../../../components/wrapper/ContentWrapper'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PriceCard from '../../../components/pricecard/PriceCard';
const Pricing = () => {
    const output = [
        {
            id: 1,
            head: "Basic Service",
            price: "3,000",
            features: [
                { id: 1, name: 'Layout Design' },
                { id: 2, name: 'HTML Development' },
                { id: 3, name: 'SASS Based CSS Structure' },
                { id: 4, name: 'Deployement' },
                { id: 5, name: 'Services and Support' },
            ],
            path: "/contact",
        },
        {
            id: 2,
            head: "Average Service",
            price: "5,000",
            features: [
                { id: 1, name: 'Dynamic Website Development' },
                { id: 2, name: 'Use of Latest Technology' },
                { id: 3, name: 'Reusable Code' },
                { id: 4, name: 'API Based Services' },
                { id: 5, name: 'Services and Support' },
            ],
            path: "/contact",
        },
        {
            id: 3,
            head: "Premium",
            price: "10,000",
            features: [
                { id: 1, name: 'Photoshop Based Design' },
                { id: 2, name: 'High Quality Images' },
                { id: 3, name: 'Multiple Previews' },
                { id: 4, name: 'Reusable Design' },
                { id: 5, name: 'Support and Services' },
            ],
            path: "/contact",
        },
    ]
    return (
        <div>
            <ContentWrapper>
                <h2 className='heading'>Project Services</h2>
                <Row>
                {output.map((item, index) => 
                 <Col md={4}  key={index} className='mb-4'>
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
