import React from 'react'
import Cards from '../../../components/cards/Cards'
import ContentWrapper from '../../../components/wrapper/ContentWrapper'
import { Col, Row } from 'react-bootstrap'
import freePdf from '../../../assets/service1.png'
import video from '../../../assets/service2.png';
import assVid from '../../../assets/service3.png'
const Services = () => {
    let CardDetails = [
        {
            id: 1,
            text: "Free Lecture Video",
            img: freePdf,
            icon: "",
            route: "/"
        },
        {
            id: 2,
            text: "My Videpo",
            img: video,
            route: "/"
        },
        {
            id: 3,
            text: "My Videpo",
            img: assVid,
            route: "/"
        },
        {
            id: 4,
            text: "My Videpo",
            img: freePdf,
            route: "/"
        },
        {
            id: 5,
            text: "My Videpo",
            img: freePdf,
            route: "/"
        },
        {
            id: 6,
            text: "My Video",
            img: freePdf,
            route: "/"
        },
    ]
    return (
        <>
            <ContentWrapper>
                <Row>
                    {CardDetails.map(( item) => {
                        return (
                            <Col key={item.id} md={4}>
                                <Cards bgImg={item.img} cardText={item.text} />
                            </Col>
                        )
                    })}
                </Row>
            </ContentWrapper>

        </>
    )
}

export default Services
