import React from 'react'
import ContentWrapper from '../../../components/wrapper/ContentWrapper'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PriceCard from '../../../components/pricecard/PriceCard';
const Pricing = () => {
    const output = [
        {
            id: 1,
            head: "Projects",
            price: "2,000",
            features: [
                { id: 1, name: 'Average', price:"3,000",desc:"Limited time offer 85% off" },
                { id: 2, name: 'Premium',price:"5,000" ,desc:"Limited time offer 85% off"},
               
            ],
            path: "/contact",
        },
        {
            id: 2,
            head: "Projects",
            price: "2,000",
            features: [
                { id: 1, name: 'Average', price:"3,000",desc:"Limited time offer 85% off" },
                { id: 2, name: 'Premium',price:"5,000" ,desc:"Limited time offer 85% off"},
               
            ],
            path: "/contact",
        },
        {
            id: 3,
            head: "Projects",
            price: "2,000",
            features: [
                { id: 1, name: 'Average', price:"3,000",desc:"Limited time offer 85% off" },
                { id: 2, name: 'Premium',price:"5,000" ,desc:"Limited time offer 85% off"},
               
            ],
            path: "/contact",
        },
    ]
    return (
        <div>
            <ContentWrapper>
                <h2 className='heading'>Our Services</h2>
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
