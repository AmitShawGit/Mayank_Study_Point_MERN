import React from 'react'
import Cards from '../../../components/cards/Cards'
import ContentWrapper from '../../../components/wrapper/ContentWrapper'
import { Col, Row } from 'react-bootstrap'
import freePdf from '../../../assets/service1.png'
import video from '../../../assets/service2.png';
import assVid from '../../../assets/service3.png'
import winner from '../../../assets/web.png';
import free from '../../../assets/service4.png'
import { Link } from 'react-router-dom';
const Services = () => {
    let CardDetails = [
        {
            id: 1,
            text: "Assignment Tutorial",
            img: freePdf,
            icon: "ri-youtube-line youtube-color",
            route: "https://www.youtube.com/@MayanksStudyPoint"
        },
        {
            id: 2,
            text: "Sample Assignment / Projects",
            img: video,
            icon: "ri-projector-2-line projector",
            route: "/SampleWorks"
        },
        {
            id: 3,
            text: "Order Assignment / Projects",
            img: assVid,
            icon: "ri-file-list-2-line service-icon",
            route: "/assignment"
        },
        {
            id: 4,
            text: "Free Pdf Notes",
            img: free,
            icon: "ri-file-pdf-2-line youtube-color",
            route: "/freepdf"
        },
        {
            id: 5,
            text: "Web Development",
            icon: "ri-medal-line projector",
            img: winner,
            route: "/"
        },
    ]
    return (
        <>
            <ContentWrapper>
                <h2 className='heading text-center'>Our Services</h2>
                <Row>
                    {CardDetails.map((item) => {
                        return (
                            <Col key={item.id} md={4} >

                                <Link to={item.route} > <Cards bgImg={item.img} cardText={item.text} icon={item.icon} /> </Link>

                            </Col>
                        )
                    })}
                </Row>
            </ContentWrapper>

        </>
    )
}

export default Services
