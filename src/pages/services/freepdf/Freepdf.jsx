import React from "react";
import ContentWrapper from "../../../components/wrapper/ContentWrapper";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card'

let Freepdf = () => {

    let select = [
        {
            id: 1,
            name: "NMIMS",
        },
        {
            id: 2,
            name: "Amity University",
        },
        {
            id: 3,
            name: "Burdwan University",
        },
    ]
    return (
        <>

            <ContentWrapper>
                <div className="select-university">

                    <Row>
                        <Col md={3}>
                            <label htmlFor="select">Select University</label>
                        </Col>
                        <Col md={8}>
                            <select name="" id="select" className="form-control">
                                {select.map((value,index) => {
                                    return(
                                        <option key={index} value={value.name}>{value.name}</option>
                                    )
                                })}

                            </select>
                        </Col>
                    </Row>
                </div>

                <Row>
                    <Col>
                        <Card className="subject-card">
                            <Card.Body>
                                <Card.Title>Business Studies</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Semester 1</Card.Subtitle>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Card.Link href="#">Add to Cart</Card.Link>
                                <Card.Link href="#">Buy Now</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </ContentWrapper>
        </>
    )
};

export default Freepdf;