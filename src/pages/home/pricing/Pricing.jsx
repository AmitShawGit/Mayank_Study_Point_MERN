import React from 'react'
import ContentWrapper from '../../../components/wrapper/ContentWrapper'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PriceCard from '../../../components/pricecard/PriceCard';
const Pricing = () => {
    const output = [
        {
            id: 1,
            head: "Assignment (UG)",
            features: [
                { id: 1, Packagename: 'Single', price:"1,900",desc:"Only limited time offer 5% off", del:"2,000" },      
                { id: 2, Packagename: 'Each Semester', price:"9,000",desc:"Only limited time offer 25% off", del:"12,000" },      
                { id: 3, Packagename: 'Annual', price:"15,600",desc:"Only limited time offer 35% off", del:"24,000" },      
                { id: 4, Packagename: 'Full Package', price:"23,000",desc:"Only limited time offer 50% off", del:"46,000" },      
               
            ],
            path: "/contact",
        },
        {
            id: 2,
            head: "Assignment (Master's / MBA)",
            features: [
                { id: 1, Packagename: 'Single', price:"1,900",desc:"Only limited time offer 5% off", del:"2,000" },      
                { id: 2, Packagename: 'Each Semester', price:"9,000",desc:"Only limited time offer 25% off", del:"12,000" },      
                { id: 3, Packagename: 'Annual', price:"15,600",desc:"Only limited time offer 35% off", del:"24,000" },      
                { id: 4, Packagename: 'Full Package', price:"23,000",desc:"Only limited time offer 50% off", del:"46,000" },      
               
            ],
            path: "/contact",
        },
        {
            id: 3,
            head: "Projects",
            features: [
                { id: 1, Packagename: 'Basic', price:"2,000",desc:"Only limited time offer 33% off", del:"3,000" },
                { id: 2, Packagename: 'Average',price:"3,000" ,desc:"Limited time offer 40% off",del:"5,000"},
                { id: 3, Packagename: 'Premium',price:"5,000" ,desc:"Limited time offer 50% off",del:"10,000"},
               
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
                            goToPay={item.features}
                        />
                     
                    </Col>   )}
                </Row>
            </ContentWrapper>
        </div>
    )
}

export default Pricing
