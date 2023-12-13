import React from "react";
import ContentWrapper from "../../../components/wrapper/ContentWrapper";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card'
let Freepdf = () => {
    return (
        <>

            <ContentWrapper>
                <Row>
                    <Col md={3}>
                        <input type="text" name="" id="" placeholder="search by name" className="form-control" />
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </ContentWrapper>
        </>
    )
};

export default Freepdf;